// CFP Bracket structure
const cfpBracket = {
    firstRound: [
        { id: 'cfp1', team1: "Alabama", team2: "Oklahoma (-3.5, 62.5)", date: "2025-12-19", completed: false, winner: null },
        { id: 'cfp2', team1: "Miami", team2: "Texas A&M (-5.5, 58.5)", date: "2025-12-20", completed: false, winner: null },
        { id: 'cfp3', team1: "Tulane", team2: "Ole Miss (-7.5, 61.5)", date: "2025-12-20", completed: false, winner: null },
        { id: 'cfp4', team1: "James Madison", team2: "Oregon (-14, 64.5)", date: "2025-12-20", completed: false, winner: null },
    ],
    quarterfinals: [
        { id: 'cfp5', team1: "TBD", team2: "No. 2 Ohio State", date: "2025-12-31", completed: false, winner: null },
        { id: 'cfp6', team1: "TBD", team2: "No. 4 Texas Tech", date: "2026-01-01", completed: false, winner: null },
        { id: 'cfp7', team1: "TBD", team2: "No. 1 Indiana", date: "2026-01-01", completed: false, winner: null },
        { id: 'cfp8', team1: "TBD", team2: "No. 3 Georgia", date: "2026-01-01", completed: false, winner: null },
    ],
    semifinals: [
        { id: 'cfp9', team1: "TBD", team2: "TBD", date: "2026-01-08", completed: false, winner: null },
        { id: 'cfp10', team1: "TBD", team2: "TBD", date: "2026-01-09", completed: false, winner: null },
    ],
    championship: [
        { id: 'cfp11', team1: "TBD", team2: "TBD", date: "2026-01-19", completed: false, winner: null },
    ]
};

// CFP Scoring: 5 pts first round, 10 pts quarterfinals, 15 pts semifinals, 20 pts championship, 30 pts perfect bracket
const CFP_SCORING = {
    firstRound: 5,
    quarterfinals: 10,
    semifinals: 15,
    championship: 20,
    perfectBracket: 30
};

// 2025-26 College Football Bowl Game data with odds (excluding CFP games)
const bowlGames = [
    { id: 1, name: "Bucked Up LA Bowl", team1: "Boise State", team2: "Washington (-8.5, 51.5)", date: "2025-12-13", completed: false, winner: null },
    { id: 2, name: "IS4S Salute to Veterans Bowl", team1: "Troy", team2: "Jacksonville State (-7, 52.5)", date: "2025-12-16", completed: false, winner: null },
    { id: 3, name: "StaffDNA Cure Bowl", team1: "Old Dominion", team2: "South Florida (-3, 58.5)", date: "2025-12-17", completed: false, winner: null },
    { id: 4, name: "68 Ventures Bowl", team1: "Louisiana", team2: "Delaware (-1.5, 55.5)", date: "2025-12-17", completed: false, winner: null },
    { id: 5, name: "Xbox Bowl", team1: "Missouri State", team2: "Arkansas State (-2.5, 60.5)", date: "2025-12-18", completed: false, winner: null },
    { id: 6, name: "Myrtle Beach Bowl", team1: "Kennesaw State", team2: "Western Michigan (-4.5, 56.5)", date: "2025-12-19", completed: false, winner: null },
    { id: 7, name: "Union Home Mortgage Gasparilla Bowl", team1: "Memphis", team2: "NC State (-6.5, 54.5)", date: "2025-12-19", completed: false, winner: null },
    { id: 12, name: "Famous Idaho Potato Bowl", team1: "Washington State", team2: "Utah State (-2.5, 59.5)", date: "2025-12-22", completed: false, winner: null },
    { id: 13, name: "Bush's Boca Raton Bowl", team1: "Toledo", team2: "Louisville (-8.5, 57.5)", date: "2025-12-23", completed: false, winner: null },
    { id: 14, name: "New Orleans Bowl", team1: "Western Kentucky", team2: "Southern Miss (-4, 60.5)", date: "2025-12-23", completed: false, winner: null },
    { id: 15, name: "Scooter's Coffee Frisco Bowl", team1: "UNLV", team2: "Ohio (-1.5, 58.5)", date: "2025-12-23", completed: false, winner: null },
    { id: 16, name: "Hawaii Bowl", team1: "California", team2: "Hawai'i (-3.5, 63.5)", date: "2025-12-24", completed: false, winner: null },
    { id: 17, name: "Camellia Bowl", team1: "Georgia State", team2: "Marshall (-5.5, 55.5)", date: "2025-12-25", completed: false, winner: null },
    { id: 18, name: "Quick Lane Bowl", team1: "Northern Illinois", team2: "Eastern Michigan (-2.5, 52.5)", date: "2025-12-26", completed: false, winner: null },
    { id: 19, name: "Guaranteed Rate Bowl", team1: "Kansas", team2: "Minnesota (-4.5, 58.5)", date: "2025-12-26", completed: false, winner: null },
    { id: 20, name: "Military Bowl", team1: "Boston College", team2: "UCF (-6.5, 56.5)", date: "2025-12-27", completed: false, winner: null },
    { id: 21, name: "TaxAct Texas Bowl", team1: "Virginia", team2: "Missouri (-7, 50.5)", date: "2025-12-27", completed: false, winner: null },
    { id: 22, name: "Kinder's Texas Bowl", team1: "LSU", team2: "Houston (-3, 42.5)", date: "2025-12-28", completed: false, winner: null },
    { id: 23, name: "JLAB Birmingham Bowl", team1: "Georgia Southern", team2: "App State", date: "2025-12-29", completed: false, winner: null },
    { id: 24, name: "Radiance Technologies Independence Bowl", team1: "Louisiana Tech", team2: "Coastal Carolina (-7, 52.5)", date: "2025-12-30", completed: false, winner: null },
    { id: 25, name: "Liberty Mutual Music City Bowl", team1: "Illinois", team2: "Tennessee (-5.5, 61.5)", date: "2025-12-30", completed: false, winner: null },
    { id: 26, name: "Valero Alamo Bowl", team1: "TCU", team2: "USC (-6.5, 58.5)", date: "2025-12-30", completed: false, winner: null },
    { id: 27, name: "ReliaQuest Bowl", team1: "Iowa", team2: "Vanderbilt (-4, 48.5)", date: "2025-12-31", completed: false, winner: null },
    { id: 28, name: "Tony the Tiger Sun Bowl", team1: "Duke", team2: "Arizona State (-1.5, 51.5)", date: "2025-12-31", completed: false, winner: null },
    { id: 29, name: "Cheez-It Citrus Bowl", team1: "Texas", team2: "Michigan (-4.5, 46.5)", date: "2025-12-31", completed: false, winner: null },
    { id: 30, name: "SRS Distribution Las Vegas Bowl", team1: "Nebraska", team2: "Utah (-14, 49.5)", date: "2025-12-31", completed: false, winner: null },
    { id: 35, name: "Lockheed Martin Armed Forces Bowl", team1: "Rice", team2: "Texas State (-10.5, 59.5)", date: "2026-01-02", completed: false, winner: null },
    { id: 36, name: "AutoZone Liberty Bowl", team1: "Navy", team2: "Cincinnati (-1.5, 55.5)", date: "2026-01-02", completed: false, winner: null },
    { id: 37, name: "Duke's Mayo Bowl", team1: "Wake Forest", team2: "Mississippi State (-3, 56.5)", date: "2026-01-02", completed: false, winner: null },
    { id: 38, name: "Holiday Bowl", team1: "SMU", team2: "Arizona (-1.5, 52.5)", date: "2026-01-02", completed: false, winner: null },
];

// Valid access keys - you can modify these or add more
const VALID_KEYS = [
    'RETURN OF THE BOWL2025',
];

// Application state
let currentPlayer = '';
let playerRatings = {};
let playerCFPBrackets = {}; // Store CFP bracket picks
let gameResults = {};
let userProfiles = {}; // Store user profiles with keys
let currentSession = null; // Track current logged in user
let trashTalkMessages = []; // Store trash talk messages

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    checkSession();
    setupNavigation();
    setupSignUpPage();
    setupRatingPage();
    setupCFPBracket();
    setupTrashTalk();
    setupStandingsPage();
    updateHomePage();
    updateNavigation();
});

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            showPage(page);
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function showPage(pageName) {
    // Protect rate, cfp, and trashtalk pages - require login
    if ((pageName === 'rate' || pageName === 'cfp' || pageName === 'trashtalk') && !currentSession) {
        alert('Please sign up and login first.');
        showPage('signup');
        // Update nav to show signup as active
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === 'signup') {
                link.classList.add('active');
            }
        });
        return;
    }
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        
        if (pageName === 'rate') {
            renderRatingPage();
        } else if (pageName === 'cfp') {
            renderCFPBracket();
        } else if (pageName === 'trashtalk') {
            renderTrashTalk();
        } else if (pageName === 'signup') {
            renderSignUpPage();
        } else if (pageName === 'standings') {
            renderStandings();
        } else if (pageName === 'history') {
            renderHistory();
        }
    }
}

function updateNavigation() {
    const rateNavLink = document.getElementById('rate-nav-link');
    const cfpNavLink = document.getElementById('cfp-nav-link');
    const trashtalkNavLink = document.getElementById('trashtalk-nav-link');
    if (currentSession) {
        rateNavLink.style.display = 'inline-block';
        cfpNavLink.style.display = 'inline-block';
        trashtalkNavLink.style.display = 'inline-block';
    } else {
        rateNavLink.style.display = 'none';
        cfpNavLink.style.display = 'none';
        trashtalkNavLink.style.display = 'none';
    }
}

// Sign Up Page
function setupSignUpPage() {
    document.getElementById('submit-signup').addEventListener('click', handleSignUp);
    document.getElementById('login-button').addEventListener('click', handleLogin);
}

function renderSignUpPage() {
    // Show login section if there are existing users
    const loginSection = document.getElementById('login-section');
    if (Object.keys(userProfiles).length > 0) {
        loginSection.style.display = 'block';
    } else {
        loginSection.style.display = 'none';
    }
    
    // Clear form fields
    document.getElementById('signup-name').value = '';
    document.getElementById('signup-key').value = '';
    document.getElementById('login-name').value = '';
    document.getElementById('signup-message').textContent = '';
    document.getElementById('signup-message').className = '';
}

function handleSignUp() {
    const name = document.getElementById('signup-name').value.trim();
    const key = document.getElementById('signup-key').value.trim();
    const messageDiv = document.getElementById('signup-message');
    
    if (!name || !key) {
        messageDiv.textContent = 'Please enter both name and access key.';
        messageDiv.className = 'error';
        return;
    }
    
    // Check if key is valid
    if (!VALID_KEYS.includes(key.toUpperCase())) {
        messageDiv.textContent = 'Invalid access key. Please check your key and try again.';
        messageDiv.className = 'error';
        return;
    }
    
    // Check if name already exists
    if (userProfiles[name]) {
        messageDiv.textContent = 'This name is already taken. Please choose another name or login.';
        messageDiv.className = 'error';
        return;
    }
    
    // Create profile
    userProfiles[name] = {
        name: name,
        key: key.toUpperCase(),
        createdAt: new Date().toISOString()
    };
    
    // Initialize ratings for this player
    if (!playerRatings[name]) {
        playerRatings[name] = {};
    }
    
    // Set as current session
    currentSession = name;
    currentPlayer = name;
    
    saveData();
    updateNavigation();
    
    messageDiv.textContent = 'Profile created successfully! Redirecting to Rate Games...';
    messageDiv.className = 'success';
    
    // Show login section for future logins
    document.getElementById('login-section').style.display = 'block';
    
    // Redirect to rate page after 1.5 seconds
    setTimeout(() => {
        showPage('rate');
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === 'rate') {
                link.classList.add('active');
            }
        });
    }, 1500);
}

function handleLogin() {
    const name = document.getElementById('login-name').value.trim();
    const messageDiv = document.getElementById('signup-message');
    
    if (!name) {
        messageDiv.textContent = 'Please enter your name.';
        messageDiv.className = 'error';
        return;
    }
    
    if (!userProfiles[name]) {
        messageDiv.textContent = 'Profile not found. Please sign up first.';
        messageDiv.className = 'error';
        return;
    }
    
    // Set as current session
    currentSession = name;
    currentPlayer = name;
    
    saveData();
    updateNavigation();
    
    messageDiv.textContent = 'Login successful! Redirecting to Rate Games...';
    messageDiv.className = 'success';
    
    // Redirect to rate page after 1.5 seconds
    setTimeout(() => {
        showPage('rate');
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === 'rate') {
                link.classList.add('active');
            }
        });
    }, 1500);
}

function checkSession() {
    const savedSession = localStorage.getItem('toiletDiamondBowl_currentSession');
    if (savedSession && userProfiles[savedSession]) {
        currentSession = savedSession;
        currentPlayer = savedSession;
    }
}

// Rating Page
function setupRatingPage() {
    document.getElementById('save-ratings').addEventListener('click', saveRatings);
    document.getElementById('clear-ratings').addEventListener('click', clearRatings);
    document.getElementById('logout-button').addEventListener('click', handleLogout);
}

function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        currentSession = null;
        currentPlayer = '';
        localStorage.removeItem('toiletDiamondBowl_currentSession');
        updateNavigation();
        showPage('home');
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === 'home') {
                link.classList.add('active');
            }
        });
    }
}

function renderRatingPage() {
    if (!currentSession || !currentPlayer) {
        document.getElementById('games-list').innerHTML = '<p>Please sign up and login first.</p>';
        return;
    }

    // Update player name display
    document.getElementById('current-player-name').textContent = currentPlayer;

    const maxPoints = bowlGames.length;
    document.getElementById('max-points').textContent = maxPoints;

    const gamesList = document.getElementById('games-list');
    gamesList.innerHTML = '';

    const ratings = playerRatings[currentPlayer] || {};

    bowlGames.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.className = `game-item ${game.completed ? 'completed' : ''}`;
        
        const gameInfo = document.createElement('div');
        gameInfo.className = 'game-info';
        gameInfo.innerHTML = `
            <div class="game-name">${game.name}</div>
            <div class="game-teams">${game.team1} vs ${game.team2}</div>
            <div class="game-date">${formatDate(game.date)}</div>
        `;

        const ratingDiv = document.createElement('div');
        ratingDiv.className = 'game-rating';
        ratingDiv.innerHTML = `
            <label>Points:</label>
            <input type="number" 
                   min="1" 
                   max="${maxPoints}" 
                   value="${ratings[game.id]?.points || ''}" 
                   data-game-id="${game.id}"
                   class="rating-input"
                   placeholder="1-${maxPoints}">
        `;

        const winnerDiv = document.createElement('div');
        winnerDiv.className = 'game-winner';
        winnerDiv.innerHTML = `
            <label>Winner:</label>
            <select data-game-id="${game.id}" class="winner-select">
                <option value="">Select Winner</option>
                <option value="${game.team1}" ${ratings[game.id]?.winner === game.team1 ? 'selected' : ''}>${game.team1}</option>
                <option value="${game.team2}" ${ratings[game.id]?.winner === game.team2 ? 'selected' : ''}>${game.team2}</option>
            </select>
        `;

        gameDiv.appendChild(gameInfo);
        gameDiv.appendChild(ratingDiv);
        gameDiv.appendChild(winnerDiv);
        gamesList.appendChild(gameDiv);
    });

    // Add validation on input with real-time checking
    document.querySelectorAll('.rating-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            const maxPoints = bowlGames.length;
            
            // Enforce max value
            if (value > maxPoints) {
                e.target.value = maxPoints;
            }
            // Enforce min value
            if (value < 1 && e.target.value !== '') {
                e.target.value = '';
            }
            
            // Check for duplicates immediately
            checkForDuplicates(e.target);
            validateRatings();
        });
        
        input.addEventListener('change', (e) => {
            checkForDuplicates(e.target);
            validateRatings();
        });
        
        input.addEventListener('blur', (e) => {
            checkForDuplicates(e.target);
        });
    });

    // Add validation on winner select changes
    document.querySelectorAll('.winner-select').forEach(select => {
        select.addEventListener('change', validateRatings);
    });
    
    // Check for duplicates on initial load
    setTimeout(() => {
        document.querySelectorAll('.rating-input').forEach(input => {
            checkForDuplicates(input);
        });
        validateRatings();
    }, 100);
}

function checkForDuplicates(changedInput) {
    const inputs = document.querySelectorAll('.rating-input');
    
    // Remove invalid class from all inputs first
    inputs.forEach(input => {
        input.classList.remove('duplicate-error');
    });
    
    // Get all entered values with their input elements
    const valueMap = new Map();
    inputs.forEach(input => {
        const val = parseInt(input.value);
        if (!isNaN(val) && val > 0) {
            if (!valueMap.has(val)) {
                valueMap.set(val, []);
            }
            valueMap.get(val).push(input);
        }
    });
    
    // Mark duplicates
    valueMap.forEach((inputList, value) => {
        if (inputList.length > 1) {
            // Mark all inputs with this duplicate value
            inputList.forEach(input => {
                input.classList.add('duplicate-error');
            });
        }
    });
}

function validateRatings() {
    const inputs = document.querySelectorAll('.rating-input');
    const selects = document.querySelectorAll('.winner-select');
    const maxPoints = bowlGames.length;
    const messageDiv = document.getElementById('validation-message');
    
    // Get all entered values
    const values = Array.from(inputs)
        .map(input => {
            const val = parseInt(input.value);
            return !isNaN(val) && val > 0 ? val : null;
        })
        .filter(val => val !== null);
    
    // Get all selected winners
    const winners = Array.from(selects)
        .map(select => select.value)
        .filter(val => val !== '');
    
    // Check for values over N
    const overMax = values.filter(val => val > maxPoints);
    if (overMax.length > 0) {
        messageDiv.textContent = `Error: Points cannot exceed ${maxPoints}!`;
        messageDiv.className = 'error';
        return false;
    }
    
    // Check for values below 1
    const belowMin = values.filter(val => val < 1);
    if (belowMin.length > 0) {
        messageDiv.textContent = 'Error: Points must be at least 1!';
        messageDiv.className = 'error';
        return false;
    }
    
    // Check for duplicate values
    const uniqueValues = new Set(values);
    if (values.length !== uniqueValues.size) {
        const duplicateCount = values.length - uniqueValues.size;
        messageDiv.textContent = `Error: Each point value can only be used once! ${duplicateCount} duplicate${duplicateCount > 1 ? 's' : ''} detected.`;
        messageDiv.className = 'error';
        return false;
    }
    
    // Check if all games have winners selected
    if (winners.length < bowlGames.length) {
        const missingWinners = bowlGames.length - winners.length;
        if (values.length === bowlGames.length) {
            messageDiv.textContent = `Error: Please select a winner for all ${bowlGames.length} games (${missingWinners} missing).`;
            messageDiv.className = 'error';
        } else {
            messageDiv.textContent = `${values.length} of ${bowlGames.length} games rated. ${missingWinners} winner${missingWinners > 1 ? 's' : ''} missing.`;
            messageDiv.className = '';
        }
        return false;
    }
    
    // Success validation - both points and winners must be complete
    if (values.length === bowlGames.length && winners.length === bowlGames.length) {
        messageDiv.textContent = 'All games rated and winners selected! Ready to save.';
        messageDiv.className = 'success';
    } else if (values.length > 0) {
        messageDiv.textContent = `${values.length} of ${bowlGames.length} games rated.`;
        messageDiv.className = '';
    } else {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }
    
    return true;
}

function saveRatings() {
    if (!currentSession || !currentPlayer) {
        alert('Please sign up and login first');
        return;
    }

    if (!validateRatings()) {
        return;
    }

    const inputs = document.querySelectorAll('.rating-input');
    const selects = document.querySelectorAll('.winner-select');
    const maxPoints = bowlGames.length;
    
    // Final validation before saving
    const values = Array.from(inputs)
        .map(input => parseInt(input.value))
        .filter(val => !isNaN(val) && val > 0);
    
    // Check all values are within range
    if (values.some(val => val > maxPoints || val < 1)) {
        alert(`All points must be between 1 and ${maxPoints}.`);
        return;
    }
    
    // Check for duplicates
    if (new Set(values).size !== values.length) {
        alert('Each point value can only be used once!');
        return;
    }
    
    // Check all games are rated
    if (values.length !== bowlGames.length) {
        alert(`Please rate all ${bowlGames.length} games.`);
        return;
    }
    
    // Check all winners are selected
    const winners = Array.from(selects)
        .map(select => select.value)
        .filter(val => val !== '');
    
    if (winners.length !== bowlGames.length) {
        const missingWinners = bowlGames.length - winners.length;
        alert(`Please select a winner for all ${bowlGames.length} games. You have ${missingWinners} winner${missingWinners > 1 ? 's' : ''} missing.`);
        return;
    }
    
    if (!playerRatings[currentPlayer]) {
        playerRatings[currentPlayer] = {};
    }

    inputs.forEach(input => {
        const gameId = parseInt(input.getAttribute('data-game-id'));
        const points = parseInt(input.value);
        if (!isNaN(points) && points > 0 && points <= maxPoints) {
            if (!playerRatings[currentPlayer][gameId]) {
                playerRatings[currentPlayer][gameId] = {};
            }
            playerRatings[currentPlayer][gameId].points = points;
        }
    });

    selects.forEach(select => {
        const gameId = parseInt(select.getAttribute('data-game-id'));
        const winner = select.value;
        if (winner) {
            if (!playerRatings[currentPlayer][gameId]) {
                playerRatings[currentPlayer][gameId] = {};
            }
            playerRatings[currentPlayer][gameId].winner = winner;
        }
    });

    saveData();
    
    const messageDiv = document.getElementById('validation-message');
    messageDiv.textContent = 'Ratings saved successfully!';
    messageDiv.className = 'success';
    
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}

function clearRatings() {
    if (confirm('Are you sure you want to clear all ratings?')) {
        if (currentPlayer && playerRatings[currentPlayer]) {
            playerRatings[currentPlayer] = {};
            saveData();
            renderRatingPage();
        }
    }
}

// CFP Bracket Page
function setupCFPBracket() {
    document.getElementById('save-cfp-bracket').addEventListener('click', saveCFPBracket);
    document.getElementById('clear-cfp-bracket').addEventListener('click', clearCFPBracket);
    document.getElementById('cfp-logout-button').addEventListener('click', handleLogout);
}

function renderCFPBracket() {
    if (!currentSession || !currentPlayer) {
        document.getElementById('cfp-bracket-container').innerHTML = '<p>Please sign up and login first.</p>';
        return;
    }

    document.getElementById('cfp-current-player-name').textContent = currentPlayer;

    const bracket = playerCFPBrackets[currentPlayer] || {};

    // First Round
    renderBracketRound('first-round-games', cfpBracket.firstRound, bracket.firstRound || {}, 'firstRound');

    // Quarterfinals
    renderBracketRound('quarterfinal-games', cfpBracket.quarterfinals, bracket.quarterfinals || {}, 'quarterfinals');

    // Semifinals
    renderBracketRound('semifinal-games', cfpBracket.semifinals, bracket.semifinals || {}, 'semifinals');

    // Championship
    renderBracketRound('championship-games', cfpBracket.championship, bracket.championship || {}, 'championship');
}

function renderBracketRound(containerId, games, savedPicks, roundType) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    games.forEach((game, index) => {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'bracket-game';
        
        const gameInfo = document.createElement('div');
        gameInfo.className = 'bracket-game-info';
        
        // Check if teams are TBD
        const team1IsTBD = game.team1 === 'TBD';
        const team2IsTBD = game.team2 === 'TBD' || game.team2.startsWith('TBD');
        
        // Get saved team predictions
        const savedTeam1 = savedPicks[game.id]?.team1 || '';
        const savedTeam2 = savedPicks[game.id]?.team2 || '';
        const savedWinner = savedPicks[game.id]?.winner || '';
        
        // Build team display/input
        let teamDisplay = '';
        if (team1IsTBD && team2IsTBD) {
            // Both teams are TBD - show two inputs
            const displayTeam1 = savedTeam1 || '';
            const displayTeam2 = savedTeam2 || '';
            teamDisplay = `
                <div class="bracket-teams-input">
                    <input type="text" 
                           data-round="${roundType}" 
                           data-game-id="${game.id}" 
                           data-team="team1" 
                           class="cfp-team-input" 
                           placeholder="Enter Team 1"
                           value="${displayTeam1}">
                    <span class="vs-text">vs</span>
                    <input type="text" 
                           data-round="${roundType}" 
                           data-game-id="${game.id}" 
                           data-team="team2" 
                           class="cfp-team-input" 
                           placeholder="Enter Team 2"
                           value="${displayTeam2}">
                </div>
            `;
        } else if (team1IsTBD) {
            // Only team1 is TBD
            const team2Name = game.team2.split('(')[0].trim();
            const displayTeam1 = savedTeam1 || '';
            teamDisplay = `
                <div class="bracket-teams-input">
                    <input type="text" 
                           data-round="${roundType}" 
                           data-game-id="${game.id}" 
                           data-team="team1" 
                           class="cfp-team-input" 
                           placeholder="Enter Team 1"
                           value="${displayTeam1}">
                    <span class="vs-text">vs</span>
                    <span class="bracket-team-name">${team2Name}</span>
                </div>
            `;
        } else if (team2IsTBD) {
            // Only team2 is TBD
            const displayTeam2 = savedTeam2 || '';
            teamDisplay = `
                <div class="bracket-teams-input">
                    <span class="bracket-team-name">${game.team1}</span>
                    <span class="vs-text">vs</span>
                    <input type="text" 
                           data-round="${roundType}" 
                           data-game-id="${game.id}" 
                           data-team="team2" 
                           class="cfp-team-input" 
                           placeholder="Enter Team 2"
                           value="${displayTeam2}">
                </div>
            `;
        } else {
            // Both teams are known - show normal display
            const team2Name = game.team2.split('(')[0].trim();
            teamDisplay = `
                <div class="bracket-game-name">${game.team1} vs ${team2Name}</div>
            `;
        }
        
        gameInfo.innerHTML = `
            ${teamDisplay}
            <div class="bracket-game-date">${formatDate(game.date)}</div>
        `;

        const winnerDiv = document.createElement('div');
        winnerDiv.className = 'bracket-winner-select';
        
        // Build winner selection
        let winnerSelect = '';
        if (team1IsTBD || team2IsTBD) {
            // If any team is TBD, use text input for winner
            const displayTeam1 = team1IsTBD ? (savedTeam1 || 'Team 1') : game.team1;
            const displayTeam2 = team2IsTBD ? (savedTeam2 || 'Team 2') : game.team2.split('(')[0].trim();
            
            winnerSelect = `
                <label>Pick Winner:</label>
                <input type="text" 
                       data-round="${roundType}" 
                       data-game-id="${game.id}" 
                       class="cfp-winner-input" 
                       placeholder="Enter winner"
                       value="${savedWinner}">
            `;
        } else {
            // Both teams known - use dropdown
            const team1Name = game.team1;
            const team2Name = game.team2.split('(')[0].trim();
            
            winnerSelect = `
                <label>Pick Winner:</label>
                <select data-round="${roundType}" data-game-id="${game.id}" class="cfp-winner-select">
                    <option value="">Select Winner</option>
                    <option value="${team1Name}" ${savedWinner === team1Name ? 'selected' : ''}>${team1Name}</option>
                    <option value="${team2Name}" ${savedWinner === team2Name ? 'selected' : ''}>${team2Name}</option>
                </select>
            `;
        }
        
        winnerDiv.innerHTML = winnerSelect;

        gameDiv.appendChild(gameInfo);
        gameDiv.appendChild(winnerDiv);
        container.appendChild(gameDiv);
    });
}

function saveCFPBracket() {
    if (!currentSession || !currentPlayer) {
        alert('Please sign up and login first');
        return;
    }

    if (!playerCFPBrackets[currentPlayer]) {
        playerCFPBrackets[currentPlayer] = {};
    }

    const bracket = {
        firstRound: {},
        quarterfinals: {},
        semifinals: {},
        championship: {}
    };

    // Collect team inputs (for TBD games)
    const teamInputs = document.querySelectorAll('.cfp-team-input');
    teamInputs.forEach(input => {
        const round = input.getAttribute('data-round');
        const gameId = input.getAttribute('data-game-id');
        const team = input.getAttribute('data-team');
        const teamName = input.value.trim();

        if (!bracket[round][gameId]) {
            bracket[round][gameId] = {};
        }
        if (teamName) {
            bracket[round][gameId][team] = teamName;
        }
    });

    // Collect winner selects (for known teams)
    const selects = document.querySelectorAll('.cfp-winner-select');
    selects.forEach(select => {
        const round = select.getAttribute('data-round');
        const gameId = select.getAttribute('data-game-id');
        const winner = select.value.trim();

        if (!bracket[round][gameId]) {
            bracket[round][gameId] = {};
        }
        if (winner) {
            bracket[round][gameId].winner = winner;
        }
    });

    // Collect winner inputs (for TBD games)
    const winnerInputs = document.querySelectorAll('.cfp-winner-input');
    winnerInputs.forEach(input => {
        const round = input.getAttribute('data-round');
        const gameId = input.getAttribute('data-game-id');
        const winner = input.value.trim();

        if (!bracket[round][gameId]) {
            bracket[round][gameId] = {};
        }
        if (winner) {
            bracket[round][gameId].winner = winner;
        }
    });

    // Check if all first round picks are made
    const firstRoundPicks = Object.keys(bracket.firstRound).filter(gameId => 
        bracket.firstRound[gameId] && bracket.firstRound[gameId].winner
    ).length;
    if (firstRoundPicks < cfpBracket.firstRound.length) {
        alert(`Please select a winner for all ${cfpBracket.firstRound.length} first round games. You have ${firstRoundPicks} of ${cfpBracket.firstRound.length}.`);
        return;
    }

    playerCFPBrackets[currentPlayer] = bracket;
    saveData();

    const messageDiv = document.getElementById('cfp-validation-message');
    messageDiv.textContent = 'CFP Bracket saved successfully!';
    messageDiv.className = 'success';

    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}

function clearCFPBracket() {
    if (confirm('Are you sure you want to clear your entire CFP bracket?')) {
        if (currentPlayer && playerCFPBrackets[currentPlayer]) {
            playerCFPBrackets[currentPlayer] = {};
            saveData();
            renderCFPBracket();
        }
    }
}

function calculateCFPScore(playerName) {
    const bracket = playerCFPBrackets[playerName];
    if (!bracket) return { points: 0, firstRoundCorrect: 0, quarterfinalsCorrect: 0, perfect: false };

    let points = 0;
    let firstRoundCorrect = 0;
    let quarterfinalsCorrect = 0;
    let semifinalsCorrect = 0;
    let championshipCorrect = 0;
    let allCorrect = true;

    // Check first round (5 pts each)
    cfpBracket.firstRound.forEach(game => {
        const pick = bracket.firstRound?.[game.id];
        const pickWinner = typeof pick === 'string' ? pick : pick?.winner;
        if (pickWinner && game.completed && game.winner) {
            if (pickWinner === game.winner) {
                points += CFP_SCORING.firstRound;
                firstRoundCorrect++;
            } else {
                allCorrect = false;
            }
        } else if (game.completed) {
            allCorrect = false;
        }
    });

    // Check quarterfinals (10 pts each)
    cfpBracket.quarterfinals.forEach(game => {
        const pick = bracket.quarterfinals?.[game.id];
        const pickWinner = typeof pick === 'string' ? pick : pick?.winner;
        if (pickWinner && game.completed && game.winner) {
            if (pickWinner === game.winner) {
                points += CFP_SCORING.quarterfinals;
                quarterfinalsCorrect++;
            } else {
                allCorrect = false;
            }
        } else if (game.completed) {
            allCorrect = false;
        }
    });

    // Check semifinals (15 pts each)
    cfpBracket.semifinals.forEach(game => {
        const pick = bracket.semifinals?.[game.id];
        const pickWinner = typeof pick === 'string' ? pick : pick?.winner;
        if (pickWinner && game.completed && game.winner) {
            if (pickWinner === game.winner) {
                points += CFP_SCORING.semifinals;
                semifinalsCorrect++;
            } else {
                allCorrect = false;
            }
        } else if (game.completed) {
            allCorrect = false;
        }
    });

    // Check championship (20 pts each)
    cfpBracket.championship.forEach(game => {
        const pick = bracket.championship?.[game.id];
        const pickWinner = typeof pick === 'string' ? pick : pick?.winner;
        if (pickWinner && game.completed && game.winner) {
            if (pickWinner === game.winner) {
                points += CFP_SCORING.championship;
                championshipCorrect++;
            } else {
                allCorrect = false;
            }
        } else if (game.completed) {
            allCorrect = false;
        }
    });

    // Perfect bracket bonus (30 pts)
    if (allCorrect) {
        points += CFP_SCORING.perfectBracket;
    }

    return { points, firstRoundCorrect, quarterfinalsCorrect, semifinalsCorrect, championshipCorrect, perfect: allCorrect };
}

// Trash Talk Page
function setupTrashTalk() {
    document.getElementById('send-trash-talk').addEventListener('click', () => {
        const input = document.getElementById('trash-talk-input');
        const replyToId = input.dataset.replyTo ? parseInt(input.dataset.replyTo) : null;
        sendTrashTalkMessage(replyToId);
    });
    document.getElementById('trashtalk-logout-button').addEventListener('click', handleLogout);
    
    // Username color picker
    document.getElementById('save-username-color').addEventListener('click', saveUsernameColor);
    
    const input = document.getElementById('trash-talk-input');
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            const replyToId = input.dataset.replyTo ? parseInt(input.dataset.replyTo) : null;
            sendTrashTalkMessage(replyToId);
        }
    });
    
    // Cancel reply button
    const cancelReplyBtn = document.getElementById('cancel-reply');
    if (cancelReplyBtn) {
        cancelReplyBtn.addEventListener('click', cancelReply);
    }
}

function saveUsernameColor() {
    if (!currentSession || !currentPlayer) {
        return;
    }
    
    const colorInput = document.getElementById('username-color');
    const color = colorInput.value;
    
    if (!userProfiles[currentPlayer]) {
        userProfiles[currentPlayer] = {};
    }
    
    userProfiles[currentPlayer].usernameColor = color;
    saveData();
    renderTrashTalk();
}

function renderTrashTalk() {
    if (!currentSession || !currentPlayer) {
        document.getElementById('trash-talk-messages').innerHTML = '<p>Please sign up and login first.</p>';
        return;
    }

    document.getElementById('trashtalk-current-player-name').textContent = currentPlayer;
    
    // Load current user's color preference
    const currentUserColor = userProfiles[currentPlayer]?.usernameColor || '#333';
    const colorInput = document.getElementById('username-color');
    if (colorInput) {
        colorInput.value = currentUserColor;
    }
    
    const messagesContainer = document.getElementById('trash-talk-messages');
    messagesContainer.innerHTML = '';
    
    if (trashTalkMessages.length === 0) {
        messagesContainer.innerHTML = '<div class="no-messages">No messages yet. Be the first to start the trash talk!</div>';
        return;
    }
    
    trashTalkMessages.forEach(message => {
        renderMessage(message, messagesContainer, 0);
    });
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function renderMessage(message, container, depth = 0) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'trash-talk-message';
    messageDiv.dataset.messageId = message.id;
    
    // Get user's color preference
    const userColor = userProfiles[message.author]?.usernameColor || '#333';
    
    // Get original message if this is a reply
    const originalMessage = message.replyTo ? findMessageById(message.replyTo) : null;
    const replyHeaderHtml = originalMessage ? `
        <div class="reply-header">
            <span class="reply-to-label">Replying to</span>
            <span class="reply-to-author" style="color: ${userProfiles[originalMessage.author]?.usernameColor || '#333'}">${escapeHtml(originalMessage.author)}</span>
            <span class="reply-to-content">${escapeHtml(originalMessage.content.length > 50 ? originalMessage.content.substring(0, 50) + '...' : originalMessage.content)}</span>
        </div>
    ` : '';
    
    // Count total reactions
    const totalReactions = Object.values(message.reactions).reduce((sum, arr) => sum + arr.length, 0);
    
    const reactionsHtml = `
        <div class="message-reactions">
            ${totalReactions > 0 ? `
                <div class="reactions-display">
                    ${message.reactions.thumbsUp.length > 0 ? `<span class="reaction-badge ${message.reactions.thumbsUp.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'thumbsUp')">👍 ${message.reactions.thumbsUp.length}</span>` : ''}
                    ${message.reactions.thumbsDown.length > 0 ? `<span class="reaction-badge ${message.reactions.thumbsDown.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'thumbsDown')">👎 ${message.reactions.thumbsDown.length}</span>` : ''}
                    ${message.reactions.laughing.length > 0 ? `<span class="reaction-badge ${message.reactions.laughing.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'laughing')">😂 ${message.reactions.laughing.length}</span>` : ''}
                    ${message.reactions.crying.length > 0 ? `<span class="reaction-badge ${message.reactions.crying.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'crying')">😢 ${message.reactions.crying.length}</span>` : ''}
                    ${message.reactions.upsideDown.length > 0 ? `<span class="reaction-badge ${message.reactions.upsideDown.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'upsideDown')">🙃 ${message.reactions.upsideDown.length}</span>` : ''}
                    ${message.reactions.fire.length > 0 ? `<span class="reaction-badge ${message.reactions.fire.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'fire')">🔥 ${message.reactions.fire.length}</span>` : ''}
                </div>
            ` : ''}
            <div class="reaction-controls">
                <button class="add-reaction-btn" onclick="toggleReactionPicker(${message.id})" title="Add Reaction">
                    <span class="plus-icon">+</span>
                </button>
                <div class="reaction-picker" id="reaction-picker-${message.id}" style="display: none;">
                    <button class="emoji-option ${message.reactions.thumbsUp.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'thumbsUp')" title="Thumbs Up">👍</button>
                    <button class="emoji-option ${message.reactions.thumbsDown.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'thumbsDown')" title="Thumbs Down">👎</button>
                    <button class="emoji-option ${message.reactions.laughing.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'laughing')" title="Laughing">😂</button>
                    <button class="emoji-option ${message.reactions.crying.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'crying')" title="Crying">😢</button>
                    <button class="emoji-option ${message.reactions.upsideDown.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'upsideDown')" title="Upside Down">🙃</button>
                    <button class="emoji-option ${message.reactions.fire.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'fire')" title="Fire">🔥</button>
                </div>
                <button class="reply-btn" onclick="startReply(${message.id})" title="Reply">
                    Reply
                </button>
            </div>
        </div>
    `;
    
    messageDiv.innerHTML = `
        ${replyHeaderHtml}
        <div class="message-content-wrapper">
            <div class="message-line">
                <span class="message-author" style="color: ${userColor}">${escapeHtml(message.author)}</span>
                <span class="message-separator">: </span>
                <span class="message-content">${formatMessageContent(message.content)}</span>
            </div>
            ${totalReactions > 0 ? `
                <div class="message-reactions">
                    <div class="reactions-display">
                        ${message.reactions.thumbsUp.length > 0 ? `<span class="reaction-badge ${message.reactions.thumbsUp.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'thumbsUp')">👍 ${message.reactions.thumbsUp.length}</span>` : ''}
                        ${message.reactions.thumbsDown.length > 0 ? `<span class="reaction-badge ${message.reactions.thumbsDown.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'thumbsDown')">👎 ${message.reactions.thumbsDown.length}</span>` : ''}
                        ${message.reactions.laughing.length > 0 ? `<span class="reaction-badge ${message.reactions.laughing.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'laughing')">😂 ${message.reactions.laughing.length}</span>` : ''}
                        ${message.reactions.crying.length > 0 ? `<span class="reaction-badge ${message.reactions.crying.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'crying')">😢 ${message.reactions.crying.length}</span>` : ''}
                        ${message.reactions.upsideDown.length > 0 ? `<span class="reaction-badge ${message.reactions.upsideDown.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'upsideDown')">🙃 ${message.reactions.upsideDown.length}</span>` : ''}
                        ${message.reactions.fire.length > 0 ? `<span class="reaction-badge ${message.reactions.fire.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'fire')">🔥 ${message.reactions.fire.length}</span>` : ''}
                    </div>
                </div>
            ` : ''}
        </div>
        <div class="reaction-controls">
            <button class="add-reaction-btn" onclick="toggleReactionPicker(${message.id})" title="Add Reaction">
                <span class="plus-icon">+</span>
            </button>
            <div class="reaction-picker" id="reaction-picker-${message.id}" style="display: none;">
                <button class="emoji-option ${message.reactions.thumbsUp.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'thumbsUp')" title="Thumbs Up">👍</button>
                <button class="emoji-option ${message.reactions.thumbsDown.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'thumbsDown')" title="Thumbs Down">👎</button>
                <button class="emoji-option ${message.reactions.laughing.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'laughing')" title="Laughing">😂</button>
                <button class="emoji-option ${message.reactions.crying.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'crying')" title="Crying">😢</button>
                <button class="emoji-option ${message.reactions.upsideDown.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'upsideDown')" title="Upside Down">🙃</button>
                <button class="emoji-option ${message.reactions.fire.includes(currentPlayer) ? 'active' : ''}" onclick="addReaction(${message.id}, 'fire')" title="Fire">🔥</button>
            </div>
            <button class="reply-btn" onclick="startReply(${message.id})" title="Reply">
                Reply
            </button>
        </div>
    `;
    
    container.appendChild(messageDiv);
}

function toggleReactionPicker(messageId) {
    const picker = document.getElementById(`reaction-picker-${messageId}`);
    if (!picker) return;
    
    // Close all other pickers
    document.querySelectorAll('.reaction-picker').forEach(p => {
        if (p.id !== `reaction-picker-${messageId}`) {
            p.style.display = 'none';
        }
    });
    
    // Toggle current picker
    if (picker.style.display === 'none') {
        picker.style.display = 'flex';
        // Close picker when clicking outside
        setTimeout(() => {
            const closePicker = (e) => {
                if (!picker.contains(e.target) && !e.target.closest(`[onclick*="toggleReactionPicker(${messageId})"]`)) {
                    picker.style.display = 'none';
                    document.removeEventListener('click', closePicker);
                }
            };
            document.addEventListener('click', closePicker);
        }, 0);
    } else {
        picker.style.display = 'none';
    }
}

// Make functions globally accessible
window.addReaction = addReaction;
window.startReply = startReply;
window.toggleReactionPicker = toggleReactionPicker;

function formatMessageContent(content) {
    // Escape HTML first
    let formatted = escapeHtml(content);
    
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    formatted = formatted.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
    
    // Convert plain URLs without http/https
    const plainUrlRegex = /(^|\s)(www\.[^\s]+)/g;
    formatted = formatted.replace(plainUrlRegex, '$1<a href="http://$2" target="_blank" rel="noopener noreferrer">$2</a>');
    
    // Convert newlines to <br>
    formatted = formatted.replace(/\n/g, '<br>');
    
    return formatted;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function sendTrashTalkMessage(replyToId = null) {
    if (!currentSession || !currentPlayer) {
        alert('Please sign up and login first');
        return;
    }
    
    const input = document.getElementById('trash-talk-input');
    const content = input.value.trim();
    
    if (!content) {
        return;
    }
    
    const message = {
        id: Date.now(),
        author: currentPlayer,
        content: content,
        timestamp: new Date().toISOString(),
        replyTo: replyToId,
        reactions: {
            thumbsUp: [],
            thumbsDown: [],
            laughing: [],
            crying: [],
            upsideDown: [],
            fire: []
        }
    };
    
    // Always add as a new message at the bottom (no nested replies)
    trashTalkMessages.push(message);
    
    saveData();
    
    input.value = '';
    input.dataset.replyTo = '';
    const replyIndicator = document.getElementById('reply-indicator');
    if (replyIndicator) {
        replyIndicator.style.display = 'none';
    }
    renderTrashTalk();
}

function findMessageById(id) {
    return trashTalkMessages.find(msg => msg.id === id) || null;
}

function addReaction(messageId, reactionType) {
    if (!currentSession || !currentPlayer) {
        alert('Please sign up and login first');
        return;
    }
    
    const message = findMessageById(messageId);
    if (!message) return;
    
    const reactions = message.reactions[reactionType];
    const index = reactions.indexOf(currentPlayer);
    
    if (index > -1) {
        // Remove reaction if already exists
        reactions.splice(index, 1);
    } else {
        // Add reaction
        reactions.push(currentPlayer);
    }
    
    // Close the picker
    const picker = document.getElementById(`reaction-picker-${messageId}`);
    if (picker) {
        picker.style.display = 'none';
    }
    
    saveData();
    renderTrashTalk();
}

function startReply(messageId) {
    const input = document.getElementById('trash-talk-input');
    const message = findMessageById(messageId);
    
    if (message) {
        input.dataset.replyTo = messageId;
        input.focus();
        const replyIndicator = document.getElementById('reply-indicator');
        if (replyIndicator) {
            replyIndicator.textContent = `Replying to ${message.author}`;
            replyIndicator.style.display = 'block';
        }
    }
}

function cancelReply() {
    const input = document.getElementById('trash-talk-input');
    input.dataset.replyTo = '';
    input.value = '';
    const replyIndicator = document.getElementById('reply-indicator');
    if (replyIndicator) {
        replyIndicator.style.display = 'none';
    }
}

// Standings Page
function setupStandingsPage() {
    document.getElementById('season-select').addEventListener('change', renderStandings);
}

function renderStandings() {
    const standingsBody = document.getElementById('standings-body');
    standingsBody.innerHTML = '';

    // Calculate scores for each player
    const playerScores = [];
    
    Object.keys(playerRatings).forEach(playerName => {
        let bowlPoints = 0;
        let gamesCorrect = 0;
        
        bowlGames.forEach(game => {
            const rating = playerRatings[playerName][game.id];
            if (rating && rating.points && game.completed && game.winner) {
                if (rating.winner === game.winner) {
                    bowlPoints += rating.points;
                    gamesCorrect++;
                }
            }
        });
        
        // Calculate CFP bracket points
        const cfpScore = calculateCFPScore(playerName);
        
        playerScores.push({
            name: playerName,
            bowlPoints: bowlPoints,
            cfpPoints: cfpScore.points,
            totalPoints: bowlPoints + cfpScore.points,
            correct: gamesCorrect,
            cfpFirstRound: cfpScore.firstRoundCorrect,
            cfpQuarterfinals: cfpScore.quarterfinalsCorrect,
            perfectBracket: cfpScore.perfect
        });
    });

    // Sort by total points (descending)
    playerScores.sort((a, b) => b.totalPoints - a.totalPoints);

    if (playerScores.length === 0) {
        standingsBody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 20px;">No players yet. Start rating games!</td></tr>';
        return;
    }

    // Table header is already set in HTML, no need to update

    playerScores.forEach((player, index) => {
        const row = document.createElement('tr');
        if (index === 0) {
            row.className = 'rank-1';
        }
        
        const perfectBadge = player.perfectBracket ? ' ⭐' : '';
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}${perfectBadge}</td>
            <td>${player.bowlPoints}</td>
            <td>${player.cfpPoints}</td>
            <td><strong>${player.totalPoints}</strong></td>
            <td>${player.correct} / ${bowlGames.filter(g => g.completed).length}</td>
            <td>${player.cfpFirstRound}/${cfpBracket.firstRound.length} | ${player.cfpQuarterfinals}/${cfpBracket.quarterfinals.length}</td>
        `;
        
        standingsBody.appendChild(row);
    });
}

// History Page
function renderHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '<p>Historical data will be displayed here as seasons are completed.</p>';
}

// Home Page
function updateHomePage() {
    document.getElementById('total-games-count').textContent = bowlGames.length;
    document.getElementById('games-played-count').textContent = bowlGames.filter(g => g.completed).length;
    document.getElementById('active-players-count').textContent = Object.keys(userProfiles).length;
}

// Data Persistence
function saveData() {
    localStorage.setItem('toiletDiamondBowl_playerRatings', JSON.stringify(playerRatings));
    localStorage.setItem('toiletDiamondBowl_playerCFPBrackets', JSON.stringify(playerCFPBrackets));
    localStorage.setItem('toiletDiamondBowl_gameResults', JSON.stringify(gameResults));
    localStorage.setItem('toiletDiamondBowl_bowlGames', JSON.stringify(bowlGames));
    localStorage.setItem('toiletDiamondBowl_cfpBracket', JSON.stringify(cfpBracket));
    localStorage.setItem('toiletDiamondBowl_userProfiles', JSON.stringify(userProfiles));
    localStorage.setItem('toiletDiamondBowl_trashTalkMessages', JSON.stringify(trashTalkMessages));
    if (currentSession) {
        localStorage.setItem('toiletDiamondBowl_currentSession', currentSession);
    }
    updateHomePage();
}

function loadData() {
    const savedRatings = localStorage.getItem('toiletDiamondBowl_playerRatings');
    const savedCFPBrackets = localStorage.getItem('toiletDiamondBowl_playerCFPBrackets');
    const savedResults = localStorage.getItem('toiletDiamondBowl_gameResults');
    const savedGames = localStorage.getItem('toiletDiamondBowl_bowlGames');
    const savedCFP = localStorage.getItem('toiletDiamondBowl_cfpBracket');
    const savedProfiles = localStorage.getItem('toiletDiamondBowl_userProfiles');
    const savedTrashTalk = localStorage.getItem('toiletDiamondBowl_trashTalkMessages');
    
    if (savedRatings) {
        playerRatings = JSON.parse(savedRatings);
    }
    
    if (savedCFPBrackets) {
        playerCFPBrackets = JSON.parse(savedCFPBrackets);
    }
    
    if (savedResults) {
        gameResults = JSON.parse(savedResults);
    }
    
    if (savedProfiles) {
        userProfiles = JSON.parse(savedProfiles);
    }
    
    if (savedTrashTalk) {
        trashTalkMessages = JSON.parse(savedTrashTalk);
        // Migrate old messages to new structure
        const flatMessages = [];
        trashTalkMessages.forEach(message => {
            // Migrate reactions
            if (!message.reactions) {
                message.reactions = {
                    thumbsUp: [],
                    thumbsDown: [],
                    laughing: [],
                    crying: [],
                    upsideDown: [],
                    fire: []
                };
            } else {
                // Add new reaction types if missing
                if (!message.reactions.crying) message.reactions.crying = [];
                if (!message.reactions.upsideDown) message.reactions.upsideDown = [];
                if (!message.reactions.fire) message.reactions.fire = [];
            }
            
            // Flatten nested replies - move them to top level
            if (message.replies && message.replies.length > 0) {
                message.replies.forEach(reply => {
                    // Ensure reply has reactions
                    if (!reply.reactions) {
                        reply.reactions = {
                            thumbsUp: [],
                            thumbsDown: [],
                            laughing: [],
                            crying: [],
                            upsideDown: [],
                            fire: []
                        };
                    } else {
                        if (!reply.reactions.crying) reply.reactions.crying = [];
                        if (!reply.reactions.upsideDown) reply.reactions.upsideDown = [];
                        if (!reply.reactions.fire) reply.reactions.fire = [];
                    }
                    // Set replyTo if not already set
                    if (!reply.replyTo) {
                        reply.replyTo = message.id;
                    }
                    flatMessages.push(reply);
                });
                // Remove nested replies
                delete message.replies;
            }
            
            flatMessages.push(message);
        });
        
        // Sort by timestamp
        flatMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        trashTalkMessages = flatMessages;
    }
    
    if (savedCFP) {
        const loadedCFP = JSON.parse(savedCFP);
        // Merge CFP bracket data
        ['firstRound', 'quarterfinals', 'semifinals', 'championship'].forEach(round => {
            if (loadedCFP[round]) {
                loadedCFP[round].forEach(loadedGame => {
                    const currentGame = cfpBracket[round].find(g => g.id === loadedGame.id);
                    if (currentGame) {
                        currentGame.completed = loadedGame.completed;
                        currentGame.winner = loadedGame.winner;
                    }
                });
            }
        });
    }
    
    if (savedGames) {
        const loadedGames = JSON.parse(savedGames);
        // Merge with current games (in case we update the game list)
        loadedGames.forEach(loadedGame => {
            const currentGame = bowlGames.find(g => g.id === loadedGame.id);
            if (currentGame) {
                currentGame.completed = loadedGame.completed;
                currentGame.winner = loadedGame.winner;
            }
        });
    }
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Admin function to mark games as completed (for testing/demo)
// You can call this from browser console: markGameComplete(gameId, winnerTeam)
window.markGameComplete = function(gameId, winnerTeam) {
    const game = bowlGames.find(g => g.id === gameId);
    if (game) {
        game.completed = true;
        game.winner = winnerTeam;
        saveData();
        renderStandings();
        alert(`Game ${game.name} marked as complete. Winner: ${winnerTeam}`);
        return;
    }
    
    // Check CFP bracket
    for (const round of ['firstRound', 'quarterfinals', 'semifinals', 'championship']) {
        const cfpGame = cfpBracket[round].find(g => g.id === gameId);
        if (cfpGame) {
            cfpGame.completed = true;
            cfpGame.winner = winnerTeam;
            saveData();
            renderStandings();
            alert(`CFP ${round} game marked as complete. Winner: ${winnerTeam}`);
            return;
        }
    }
    
    alert(`Game with ID ${gameId} not found.`);
};

// Admin function to mark CFP game as completed
// Usage: markCFPComplete(round, gameId, winnerTeam)
// round: 'firstRound', 'quarterfinals', 'semifinals', or 'championship'
window.markCFPComplete = function(round, gameId, winnerTeam) {
    const game = cfpBracket[round]?.find(g => g.id === gameId);
    if (game) {
        game.completed = true;
        game.winner = winnerTeam;
        saveData();
        renderStandings();
        alert(`CFP ${round} game marked as complete. Winner: ${winnerTeam}`);
    } else {
        alert(`CFP game not found in ${round} with ID ${gameId}`);
    }
};

