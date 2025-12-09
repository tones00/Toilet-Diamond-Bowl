// Load games into database
const db = require('./database');

const bowlGames = [
    { id: 1, name: "NAVY v. ARMY", team1: "Navy", team2: "Army (+6pts)", date: "2025-12-13" },
    { id: 2, name: "Bucked Up LA Bowl", team1: "Boise State (+8.5pts)", team2: "Washington", date: "2025-12-13" },
    { id: 3, name: "IS4S Salute to Veterans Bowl", team1: "Troy", team2: "Jacksonville State (+3.5pts)", date: "2025-12-16" },
    { id: 4, name: "StaffDNA Cure Bowl", team1: "Old Dominion (+6.5pts)", team2: "South Florida", date: "2025-12-17" },
    { id: 5, name: "68 Ventures Bowl", team1: "Louisiana", team2: "Delaware (+3.5pts)", date: "2025-12-17" },
    { id: 6, name: "Xbox Bowl", team1: "Missouri State (+2.5pts)", team2: "Arkansas State", date: "2025-12-18" },
    { id: 7, name: "Myrtle Beach Bowl", team1: "Kennesaw State (+3.5pts)", team2: "Western Michigan", date: "2025-12-19" },
    { id: 8, name: "Union Home Mortgage Gasparilla Bowl", team1: "Memphis(+5.5pts)", team2: "NC State", date: "2025-12-19" },
    { id: 12, name: "Famous Idaho Potato Bowl", team1: "Washington State", team2: "Utah State (+4.5pts)", date: "2025-12-22" },
    { id: 13, name: "Bush's Boca Raton Bowl", team1: "Toledo (+8.5pts)", team2: "Louisville", date: "2025-12-23" },
    { id: 14, name: "New Orleans Bowl", team1: "Western Kentucky", team2: "Southern Miss (+4.5pts)", date: "2025-12-23" },
    { id: 15, name: "Scooter's Coffee Frisco Bowl", team1: "UNLV", team2: "Ohio (+4.5pts)", date: "2025-12-23" },
    { id: 16, name: "Hawaii Bowl", team1: "California", team2: "Hawai'i (+3.5pts)", date: "2025-12-24" },
    { id: 17, name: "GameAbove Sports Bowl", team1: "Central Michigan (+12.5pts)", team2: "Northwestern", date: "2025-12-26" },
    { id: 18, name: "Rate Bowl", team1: "New Mexico (+4.5pts)", team2: "Minnesota", date: "2025-12-26" },
    { id: 19, name: "SERVPRO First Responder Bowl", team1: "Florida International (+8.5pts)", team2: "UTSA", date: "2025-12-26" },
    { id: 20, name: "Go Bowling Military Bowl", team1: "Pittsburgh", team2: "East Carolina (+6.5pts)", date: "2025-12-27" },
    { id: 21, name: "Bad Boy Mowers Pinstripe Bowl", team1: "Penn State", team2: "Clemson (+3.5pts)", date: "2025-12-27" },
    { id: 22, name: "Wasabi Fenway Bowl", team1: "UConn", team2: "Army (+6.5pts)", date: "2025-12-27" },
    { id: 23, name: "Pop-Tarts Bowl", team1: "Georgia Tech (+3.5pts)", team2: "BYU", date: "2025-12-27" },
    { id: 24, name: "Snoop Dogg Arizona Bowl", team1: "Miami-OH (+3.5pts)", team2: "Fresno State", date: "2025-12-27" },
    { id: 25, name: "Isleta New Mexico Bowl", team1: "North Texas", team2: "San Diego St (+3.5pts)", date: "2025-12-27" },
    { id: 26, name: "TaxSlayer Gator Bowl", team1: "Virginia (+7.5pts)", team2: "Missouri", date: "2025-12-27" },
    { id: 27, name: "Kinder's Texas Bowl", team1: "LSU (+3.5pts)", team2: "Houston", date: "2025-12-27" },
    { id: 28, name: "JLab Birmingham Bowl", team1: "Georgia Southern", team2: "App St", date: "2025-12-29" },
    { id: 29, name: "Radiance Technologies Independence Bowl", team1: "Coastal Carolina (+7.5pts)", team2: "Louisiana Tech", date: "2025-12-30" },
    { id: 30, name: "Liberty Mutual Music City Bowl", team1: "Tennessee", team2: "Illinios (+5.5pts)", date: "2025-12-30" },
    { id: 31, name: "Valero Alamo Bowl", team1: "USC", team2: "TCU (+6.5pts)", date: "2025-12-30" },
    { id: 32, name: "ReliaQuest Bowl", team1: "Iowa (4.5pts)", team2: "Vanderbilt", date: "2025-12-31" },
    { id: 33, name: "Tony the Tiger Sun Bowl", team1: "Arizona St (+1.5pts)", team2: "Duke", date: "2025-12-31" },
    { id: 34, name: "Cheez-It Citrus Bowl", team1: "Michigan (+4.5pts)", team2: "Texas", date: "2025-12-30" },
    { id: 35, name: "SRS Distribution Las Vegas Bowl", team1: "Nebraska (+14.5pts)", team2: "Utah", date: "2025-12-31" },
    { id: 36, name: "Lockheed Martin Armed Forces Bowl", team1: "Rice (+10.5pts)", team2: "Texas St", date: "2026-01-02" },
    { id: 37, name: "AutoZone Liberty Bowl", team1: "Navy", team2: "Cincinnati (+1.5pts)", date: "2026-01-02" },
    { id: 38, name: "Duke's Mayo Bowl", team1: "Wake Forest (+3.5pts)", team2: "Mississippi St", date: "2026-01-02" },
    { id: 39, name: "Holiday Bowl", team1: "SMU (+3.5pts)", team2: "Arizona", date: "2026-01-02" },
];

const cfpGames = {
    firstRound: [
        { id: 'cfp1', team1: "Alabama", team2: "Oklahoma (+1.5pts)", date: "2025-12-19" },
        { id: 'cfp2', team1: "Miami (+4.5pts)", team2: "Texas A&M", date: "2025-12-20" },
        { id: 'cfp3', team1: "Tulane (+16.5pts)", team2: "Ole Miss", date: "2025-12-20" },
        { id: 'cfp4', team1: "James Madison (+21pts)", team2: "Oregon (-14, 64.5)", date: "2025-12-20" },
    ],
    quarterfinals: [
        { id: 'cfp5', team1: "TBD", team2: "No. 2 Ohio State", date: "2025-12-31" },
        { id: 'cfp6', team1: "TBD", team2: "No. 4 Texas Tech", date: "2026-01-01" },
        { id: 'cfp7', team1: "TBD", team2: "No. 1 Indiana", date: "2026-01-01" },
        { id: 'cfp8', team1: "TBD", team2: "No. 3 Georgia", date: "2026-01-01" },
    ],
    semifinals: [
        { id: 'cfp9', team1: "TBD", team2: "TBD", date: "2026-01-08" },
        { id: 'cfp10', team1: "TBD", team2: "TBD", date: "2026-01-09" },
    ],
    championship: [
        { id: 'cfp11', team1: "TBD", team2: "TBD", date: "2026-01-19" },
    ]
};

async function loadGames() {
    const sqlite3 = require('sqlite3').verbose();
    const path = require('path');
    const DB_PATH = path.join(__dirname, 'toilet_diamond_bowl.db');
    
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(DB_PATH, (err) => {
            if (err) {
                reject(err);
                return;
            }
            
            db.serialize(() => {
                // Insert bowl games
                const bowlStmt = db.prepare('INSERT OR IGNORE INTO bowl_games (id, name, team1, team2, date) VALUES (?, ?, ?, ?, ?)');
                bowlGames.forEach(game => {
                    bowlStmt.run([game.id, game.name, game.team1, game.team2, game.date]);
                });
                bowlStmt.finalize();
                
                // Insert CFP games
                const cfpStmt = db.prepare('INSERT OR IGNORE INTO cfp_games (id, round, team1, team2, date) VALUES (?, ?, ?, ?, ?)');
                Object.keys(cfpGames).forEach(round => {
                    cfpGames[round].forEach(game => {
                        cfpStmt.run([game.id, round, game.team1, game.team2, game.date]);
                    });
                });
                cfpStmt.finalize();
                
                db.close((err) => {
                    if (err) reject(err);
                    else {
                        console.log('Games loaded into database');
                        resolve();
                    }
                });
            });
        });
    });
}

module.exports = { loadGames };

