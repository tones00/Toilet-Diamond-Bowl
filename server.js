const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const db = require('./database');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Initialize database
const loadGames = require('./load-games');

db.init().then(async () => {
    // Load games if database is empty
    try {
        const games = await db.getBowlGames();
        if (games.length === 0) {
            console.log('Loading initial games into database...');
            await loadGames.loadGames();
        } else {
            console.log(`Database already has ${games.length} bowl games`);
        }
    } catch (error) {
        console.error('Error loading games:', error);
    }
}).catch(err => {
    console.error('Database initialization failed:', err);
    process.exit(1);
});

// API Routes

// User Profiles
app.get('/api/users', async (req, res) => {
    try {
        const users = await db.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/users', async (req, res) => {
    try {
        const { name, key, ip } = req.body;
        const user = await db.createUser(name, key, ip);
        io.emit('userCreated', user);
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/api/users/:name', async (req, res) => {
    try {
        const user = await db.getUser(req.params.name);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Player Ratings
app.get('/api/ratings', async (req, res) => {
    try {
        const ratings = await db.getAllRatings();
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/ratings/:playerName', async (req, res) => {
    try {
        const ratings = await db.getPlayerRatings(req.params.playerName);
        res.json(ratings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/ratings/:playerName', async (req, res) => {
    try {
        const { ratings } = req.body;
        await db.savePlayerRatings(req.params.playerName, ratings);
        io.emit('ratingsUpdated', { playerName: req.params.playerName, ratings });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CFP Brackets
app.get('/api/cfp-brackets', async (req, res) => {
    try {
        const brackets = await db.getAllCFPBrackets();
        res.json(brackets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/cfp-brackets/:playerName', async (req, res) => {
    try {
        const bracket = await db.getPlayerCFPBracket(req.params.playerName);
        res.json(bracket || {});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/cfp-brackets/:playerName', async (req, res) => {
    try {
        const { bracket } = req.body;
        await db.savePlayerCFPBracket(req.params.playerName, bracket);
        io.emit('cfpBracketUpdated', { playerName: req.params.playerName, bracket });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Bowl Games
app.get('/api/games', async (req, res) => {
    try {
        const games = await db.getBowlGames();
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/games/:gameId', async (req, res) => {
    try {
        const { completed, winner, team1Score, team2Score, score } = req.body;
        await db.updateBowlGame(req.params.gameId, { completed, winner, team1Score, team2Score, score });
        io.emit('gameUpdated', { gameId: req.params.gameId, completed, winner, score });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// CFP Games
app.get('/api/cfp-games', async (req, res) => {
    try {
        const games = await db.getCFPGames();
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/cfp-games/:round/:gameId', async (req, res) => {
    try {
        const { completed, winner, team1Score, team2Score, score } = req.body;
        await db.updateCFPGame(req.params.round, req.params.gameId, { completed, winner, team1Score, team2Score, score });
        io.emit('cfpGameUpdated', { round: req.params.round, gameId: req.params.gameId, completed, winner, score });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Trash Talk Messages
app.get('/api/trash-talk', async (req, res) => {
    try {
        const messages = await db.getTrashTalkMessages();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/trash-talk', async (req, res) => {
    try {
        const message = await db.createTrashTalkMessage(req.body);
        io.emit('newMessage', message);
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/trash-talk/:messageId/reaction', async (req, res) => {
    try {
        const { reactionType, playerName } = req.body;
        const message = await db.toggleReaction(req.params.messageId, reactionType, playerName);
        io.emit('reactionUpdated', { messageId: req.params.messageId, message });
        res.json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/users/:playerName/color', async (req, res) => {
    try {
        const { color } = req.body;
        await db.updateUserColor(req.params.playerName, color);
        io.emit('userColorUpdated', { playerName: req.params.playerName, color });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Admin Routes
app.get('/api/admin/banned-ips', async (req, res) => {
    try {
        const bannedIPs = await db.getBannedIPs();
        res.json(bannedIPs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/admin/ban-ip', async (req, res) => {
    try {
        const { ip } = req.body;
        await db.banIP(ip);
        io.emit('ipBanned', { ip });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/admin/ban-ip/:ip', async (req, res) => {
    try {
        await db.unbanIP(req.params.ip);
        io.emit('ipUnbanned', { ip: req.params.ip });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/admin/users/:playerName', async (req, res) => {
    try {
        await db.deleteUser(req.params.playerName);
        io.emit('userDeleted', { playerName: req.params.playerName });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Serve frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// WebSocket connection
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    
    socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Accessible from network at http://YOUR_IP:${PORT}`);
});

