const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DB_PATH = path.join(__dirname, 'toilet_diamond_bowl.db');
let db = null;

function init() {
    return new Promise((resolve, reject) => {
        db = new sqlite3.Database(DB_PATH, (err) => {
            if (err) {
                console.error('Error opening database:', err);
                reject(err);
                return;
            }
            console.log('Connected to SQLite database');
            createTables().then(resolve).catch(reject);
        });
    });
}

function createTables() {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            // Users table
            db.run(`CREATE TABLE IF NOT EXISTS users (
                name TEXT PRIMARY KEY,
                key TEXT NOT NULL,
                createdAt TEXT NOT NULL,
                ip TEXT,
                color TEXT DEFAULT '#333'
            )`);

            // Player Ratings table
            db.run(`CREATE TABLE IF NOT EXISTS player_ratings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                player_name TEXT NOT NULL,
                game_id INTEGER NOT NULL,
                points INTEGER,
                winner TEXT,
                FOREIGN KEY (player_name) REFERENCES users(name),
                UNIQUE(player_name, game_id)
            )`);

            // CFP Brackets table
            db.run(`CREATE TABLE IF NOT EXISTS cfp_brackets (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                player_name TEXT NOT NULL,
                round TEXT NOT NULL,
                game_id TEXT NOT NULL,
                team1 TEXT,
                team2 TEXT,
                winner TEXT,
                FOREIGN KEY (player_name) REFERENCES users(name),
                UNIQUE(player_name, round, game_id)
            )`);

            // Bowl Games table
            db.run(`CREATE TABLE IF NOT EXISTS bowl_games (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                team1 TEXT NOT NULL,
                team2 TEXT NOT NULL,
                date TEXT NOT NULL,
                completed INTEGER DEFAULT 0,
                winner TEXT,
                team1Score INTEGER,
                team2Score INTEGER,
                score TEXT
            )`);

            // CFP Games table
            db.run(`CREATE TABLE IF NOT EXISTS cfp_games (
                id TEXT PRIMARY KEY,
                round TEXT NOT NULL,
                team1 TEXT NOT NULL,
                team2 TEXT NOT NULL,
                date TEXT NOT NULL,
                completed INTEGER DEFAULT 0,
                winner TEXT,
                team1Score INTEGER,
                team2Score INTEGER,
                score TEXT
            )`);

            // Trash Talk Messages table
            db.run(`CREATE TABLE IF NOT EXISTS trash_talk_messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                author TEXT NOT NULL,
                content TEXT NOT NULL,
                timestamp TEXT NOT NULL,
                replyTo INTEGER,
                reactions TEXT DEFAULT '{}',
                FOREIGN KEY (author) REFERENCES users(name)
            )`);

            // Banned IPs table
            db.run(`CREATE TABLE IF NOT EXISTS banned_ips (
                ip TEXT PRIMARY KEY
            )`);

            // User IPs table
            db.run(`CREATE TABLE IF NOT EXISTS user_ips (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_name TEXT NOT NULL,
                ip TEXT NOT NULL,
                FOREIGN KEY (user_name) REFERENCES users(name),
                UNIQUE(user_name, ip)
            )`);

            db.run('PRAGMA foreign_keys = ON', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    });
}

// User operations
function getAllUsers() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM users', (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function getUser(name) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM users WHERE name = ?', [name], (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

function createUser(name, key, ip) {
    return new Promise((resolve, reject) => {
        const createdAt = new Date().toISOString();
        db.run('INSERT INTO users (name, key, createdAt, ip) VALUES (?, ?, ?, ?)', 
            [name, key, createdAt, ip], function(err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint')) {
                    reject(new Error('Username already taken'));
                } else {
                    reject(err);
                }
            } else {
                if (ip) {
                    db.run('INSERT OR IGNORE INTO user_ips (user_name, ip) VALUES (?, ?)', [name, ip]);
                }
                resolve({ name, key, createdAt, ip });
            }
        });
    });
}

function updateUserColor(playerName, color) {
    return new Promise((resolve, reject) => {
        db.run('UPDATE users SET color = ? WHERE name = ?', [color, playerName], (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

// Ratings operations
function getAllRatings() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM player_ratings', (err, rows) => {
            if (err) reject(err);
            else {
                const ratings = {};
                rows.forEach(row => {
                    if (!ratings[row.player_name]) {
                        ratings[row.player_name] = {};
                    }
                    ratings[row.player_name][row.game_id] = {
                        points: row.points,
                        winner: row.winner
                    };
                });
                resolve(ratings);
            }
        });
    });
}

function getPlayerRatings(playerName) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM player_ratings WHERE player_name = ?', [playerName], (err, rows) => {
            if (err) reject(err);
            else {
                const ratings = {};
                rows.forEach(row => {
                    ratings[row.game_id] = {
                        points: row.points,
                        winner: row.winner
                    };
                });
                resolve(ratings);
            }
        });
    });
}

function savePlayerRatings(playerName, ratings) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run('BEGIN TRANSACTION');
            db.run('DELETE FROM player_ratings WHERE player_name = ?', [playerName]);
            
            const stmt = db.prepare('INSERT INTO player_ratings (player_name, game_id, points, winner) VALUES (?, ?, ?, ?)');
            Object.keys(ratings).forEach(gameId => {
                const rating = ratings[gameId];
                stmt.run([playerName, gameId, rating.points, rating.winner]);
            });
            stmt.finalize();
            
            db.run('COMMIT', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    });
}

// CFP Bracket operations
function getAllCFPBrackets() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM cfp_brackets', (err, rows) => {
            if (err) reject(err);
            else {
                const brackets = {};
                rows.forEach(row => {
                    if (!brackets[row.player_name]) {
                        brackets[row.player_name] = {};
                    }
                    if (!brackets[row.player_name][row.round]) {
                        brackets[row.player_name][row.round] = {};
                    }
                    brackets[row.player_name][row.round][row.game_id] = {
                        team1: row.team1,
                        team2: row.team2,
                        winner: row.winner
                    };
                });
                resolve(brackets);
            }
        });
    });
}

function getPlayerCFPBracket(playerName) {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM cfp_brackets WHERE player_name = ?', [playerName], (err, rows) => {
            if (err) reject(err);
            else {
                const bracket = {};
                rows.forEach(row => {
                    if (!bracket[row.round]) {
                        bracket[row.round] = {};
                    }
                    bracket[row.round][row.game_id] = {
                        team1: row.team1,
                        team2: row.team2,
                        winner: row.winner
                    };
                });
                resolve(bracket);
            }
        });
    });
}

function savePlayerCFPBracket(playerName, bracket) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run('BEGIN TRANSACTION');
            db.run('DELETE FROM cfp_brackets WHERE player_name = ?', [playerName]);
            
            const stmt = db.prepare('INSERT INTO cfp_brackets (player_name, round, game_id, team1, team2, winner) VALUES (?, ?, ?, ?, ?, ?)');
            Object.keys(bracket).forEach(round => {
                Object.keys(bracket[round]).forEach(gameId => {
                    const pick = bracket[round][gameId];
                    stmt.run([
                        playerName,
                        round,
                        gameId,
                        pick.team1 || null,
                        pick.team2 || null,
                        pick.winner || null
                    ]);
                });
            });
            stmt.finalize();
            
            db.run('COMMIT', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    });
}

// Bowl Games operations
function getBowlGames() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM bowl_games ORDER BY id', (err, rows) => {
            if (err) reject(err);
            else {
                const games = rows.map(row => ({
                    id: row.id,
                    name: row.name,
                    team1: row.team1,
                    team2: row.team2,
                    date: row.date,
                    completed: row.completed === 1,
                    winner: row.winner,
                    team1Score: row.team1Score,
                    team2Score: row.team2Score,
                    score: row.score
                }));
                resolve(games);
            }
        });
    });
}

function updateBowlGame(gameId, updates) {
    return new Promise((resolve, reject) => {
        const completed = updates.completed ? 1 : 0;
        db.run(`UPDATE bowl_games SET completed = ?, winner = ?, team1Score = ?, team2Score = ?, score = ? WHERE id = ?`,
            [completed, updates.winner, updates.team1Score, updates.team2Score, updates.score, gameId],
            (err) => {
                if (err) reject(err);
                else resolve();
            });
    });
}

// CFP Games operations
function getCFPGames() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM cfp_games ORDER BY round, id', (err, rows) => {
            if (err) reject(err);
            else {
                const games = {};
                rows.forEach(row => {
                    if (!games[row.round]) {
                        games[row.round] = [];
                    }
                    games[row.round].push({
                        id: row.id,
                        team1: row.team1,
                        team2: row.team2,
                        date: row.date,
                        completed: row.completed === 1,
                        winner: row.winner,
                        team1Score: row.team1Score,
                        team2Score: row.team2Score,
                        score: row.score
                    });
                });
                resolve(games);
            }
        });
    });
}

function updateCFPGame(round, gameId, updates) {
    return new Promise((resolve, reject) => {
        const completed = updates.completed ? 1 : 0;
        db.run(`UPDATE cfp_games SET completed = ?, winner = ?, team1Score = ?, team2Score = ?, score = ? WHERE id = ? AND round = ?`,
            [completed, updates.winner, updates.team1Score, updates.team2Score, updates.score, gameId, round],
            (err) => {
                if (err) reject(err);
                else resolve();
            });
    });
}

// Trash Talk operations
function getTrashTalkMessages() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM trash_talk_messages ORDER BY timestamp', (err, rows) => {
            if (err) reject(err);
            else {
                const messages = rows.map(row => ({
                    id: row.id,
                    author: row.author,
                    content: row.content,
                    timestamp: row.timestamp,
                    replyTo: row.replyTo,
                    reactions: JSON.parse(row.reactions || '{}')
                }));
                resolve(messages);
            }
        });
    });
}

function createTrashTalkMessage(message) {
    return new Promise((resolve, reject) => {
        const timestamp = message.timestamp || new Date().toISOString();
        const reactions = JSON.stringify(message.reactions || {});
        db.run('INSERT INTO trash_talk_messages (author, content, timestamp, replyTo, reactions) VALUES (?, ?, ?, ?, ?)',
            [message.author, message.content, timestamp, message.replyTo || null, reactions],
            function(err) {
                if (err) reject(err);
                else {
                    resolve({
                        id: this.lastID,
                        author: message.author,
                        content: message.content,
                        timestamp: timestamp,
                        replyTo: message.replyTo,
                        reactions: message.reactions || {}
                    });
                }
            });
    });
}

function toggleReaction(messageId, reactionType, playerName) {
    return new Promise((resolve, reject) => {
        db.get('SELECT reactions FROM trash_talk_messages WHERE id = ?', [messageId], (err, row) => {
            if (err) {
                reject(err);
                return;
            }
            
            const reactions = JSON.parse(row.reactions || '{}');
            if (!reactions[reactionType]) {
                reactions[reactionType] = [];
            }
            
            const index = reactions[reactionType].indexOf(playerName);
            if (index > -1) {
                reactions[reactionType].splice(index, 1);
            } else {
                reactions[reactionType].push(playerName);
            }
            
            db.run('UPDATE trash_talk_messages SET reactions = ? WHERE id = ?',
                [JSON.stringify(reactions), messageId], (err) => {
                if (err) reject(err);
                else {
                    db.get('SELECT * FROM trash_talk_messages WHERE id = ?', [messageId], (err, row) => {
                        if (err) reject(err);
                        else {
                            resolve({
                                id: row.id,
                                author: row.author,
                                content: row.content,
                                timestamp: row.timestamp,
                                replyTo: row.replyTo,
                                reactions: JSON.parse(row.reactions)
                            });
                        }
                    });
                }
            });
        });
    });
}

// Admin operations
function getBannedIPs() {
    return new Promise((resolve, reject) => {
        db.all('SELECT ip FROM banned_ips', (err, rows) => {
            if (err) reject(err);
            else resolve(rows.map(row => row.ip));
        });
    });
}

function banIP(ip) {
    return new Promise((resolve, reject) => {
        db.run('INSERT OR IGNORE INTO banned_ips (ip) VALUES (?)', [ip], (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

function unbanIP(ip) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM banned_ips WHERE ip = ?', [ip], (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

function deleteUser(playerName) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run('BEGIN TRANSACTION');
            db.run('DELETE FROM player_ratings WHERE player_name = ?', [playerName]);
            db.run('DELETE FROM cfp_brackets WHERE player_name = ?', [playerName]);
            db.run('DELETE FROM trash_talk_messages WHERE author = ?', [playerName]);
            db.run('DELETE FROM user_ips WHERE user_name = ?', [playerName]);
            db.run('DELETE FROM users WHERE name = ?', [playerName]);
            db.run('COMMIT', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    });
}

function loadInitialGames(bowlGamesData, cfpGamesData) {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run('BEGIN TRANSACTION');
            
            // Insert bowl games
            const bowlStmt = db.prepare('INSERT OR IGNORE INTO bowl_games (id, name, team1, team2, date) VALUES (?, ?, ?, ?, ?)');
            bowlGamesData.forEach(game => {
                bowlStmt.run([game.id, game.name, game.team1, game.team2, game.date]);
            });
            bowlStmt.finalize();
            
            // Insert CFP games
            const cfpStmt = db.prepare('INSERT OR IGNORE INTO cfp_games (id, round, team1, team2, date) VALUES (?, ?, ?, ?, ?)');
            Object.keys(cfpGamesData).forEach(round => {
                cfpGamesData[round].forEach(game => {
                    cfpStmt.run([game.id, round, game.team1, game.team2, game.date]);
                });
            });
            cfpStmt.finalize();
            
            db.run('COMMIT', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    });
}

module.exports = {
    init,
    getAllUsers,
    getUser,
    createUser,
    updateUserColor,
    getAllRatings,
    getPlayerRatings,
    savePlayerRatings,
    getAllCFPBrackets,
    getPlayerCFPBracket,
    savePlayerCFPBracket,
    getBowlGames,
    updateBowlGame,
    getCFPGames,
    updateCFPGame,
    getTrashTalkMessages,
    createTrashTalkMessage,
    toggleReaction,
    getBannedIPs,
    banIP,
    unbanIP,
    deleteUser,
    loadInitialGames
};

