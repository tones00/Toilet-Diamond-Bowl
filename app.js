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
    '2025BOWL',
];

// Admin PIN - you can modify this
const ADMIN_PIN = 'ADMIN2025';

// Submission deadline: December 12, 2025 at 5:00 PM
const SUBMISSION_DEADLINE = new Date('2025-12-12T17:00:00');

// Application state
let currentPlayer = '';
let playerRatings = {};
let playerCFPBrackets = {}; // Store CFP bracket picks
let gameResults = {};
let userProfiles = {}; // Store user profiles with keys
let currentSession = null; // Track current logged in user
let trashTalkMessages = []; // Store trash talk messages
let adminSession = null; // Track admin login session
let bannedIPs = []; // Store banned IP addresses
let userIPs = {}; // Store IP addresses for each user

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    checkIPBan();
    checkSession();
    checkAdminSession();
    getUserIP(); // Get and store current user's IP
    setupNavigation();
    setupSignUpPage();
    setupRatingPage();
    setupCFPBracket();
    setupTrashTalk();
    setupStandingsPage();
    setupAdminLogin();
    setupAdminPage();
    updateHomePage();
    updateNavigation();
});

// Get user's IP address
async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const userIP = data.ip;
        
        // Store IP for current user if logged in
        if (currentSession && userProfiles[currentSession]) {
            if (!userIPs[currentSession]) {
                userIPs[currentSession] = [];
            }
            if (!userIPs[currentSession].includes(userIP)) {
                userIPs[currentSession].push(userIP);
                saveData();
            }
        }
        
        return userIP;
    } catch (error) {
        console.error('Error fetching IP:', error);
        return null;
    }
}

// Check if current IP is banned
function checkIPBan() {
    getUserIP().then(ip => {
        if (ip && bannedIPs.includes(ip)) {
            // Clear any session
            currentSession = null;
            adminSession = null;
            localStorage.removeItem('toiletDiamondBowl_currentSession');
            localStorage.removeItem('toiletDiamondBowl_adminSession');
            
            // Show ban message and prevent access
            document.body.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f5f5f5;">
                    <div style="text-align: center; padding: 40px; background: white; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                        <h1 style="color: #c41e3a; margin-bottom: 20px;">Access Denied</h1>
                        <p style="font-size: 1.2em; color: #666; margin-bottom: 10px;">Your IP address has been banned from this site.</p>
                        <p style="color: #999;">IP: ${ip}</p>
                    </div>
                </div>
            `;
        }
    });
}

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
    if ((pageName === 'rate' || pageName === 'point-submission' || pageName === 'cfp' || pageName === 'trashtalk') && !currentSession) {
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
    
    // Protect admin page - require admin login
    if (pageName === 'admin' && !adminSession) {
        alert('Please login as admin first.');
        showPage('admin-login');
        // Update nav to show admin-login as active
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === 'admin-login') {
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
        
        if (pageName === 'rate' || pageName === 'point-submission') {
            renderRatingPage();
        } else if (pageName === 'cfp') {
            renderCFPBracket();
        } else if (pageName === 'trashtalk') {
            renderTrashTalk();
        } else if (pageName === 'signup') {
            renderSignUpPage();
        } else if (pageName === 'admin') {
            renderAdminPage();
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
    const adminNavLink = document.getElementById('admin-nav-link');
    const adminLoginNavLink = document.getElementById('admin-login-nav-link');
    
    if (currentSession) {
        rateNavLink.style.display = 'inline-block';
        cfpNavLink.style.display = 'inline-block';
        trashtalkNavLink.style.display = 'inline-block';
    } else {
        rateNavLink.style.display = 'none';
        cfpNavLink.style.display = 'none';
        trashtalkNavLink.style.display = 'none';
    }
    
    if (adminSession) {
        adminNavLink.style.display = 'inline-block';
        adminLoginNavLink.style.display = 'none';
    } else {
        adminNavLink.style.display = 'none';
        adminLoginNavLink.style.display = 'inline-block';
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
    
        // Redirect to point submission page after 1.5 seconds
        setTimeout(() => {
            showPage('point-submission');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-page') === 'point-submission') {
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
    
    // Get and store IP
    getUserIP().then(ip => {
        // Update IP in profile
        if (ip) {
            if (!userIPs[name]) {
                userIPs[name] = [];
            }
            if (!userIPs[name].includes(ip)) {
                userIPs[name].push(ip);
            }
            if (userProfiles[name]) {
                userProfiles[name].ip = ip;
            }
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
            showPage('point-submission');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-page') === 'point-submission') {
                    link.classList.add('active');
                }
            });
        }, 1500);
    });
}

function checkSession() {
    const savedSession = localStorage.getItem('toiletDiamondBowl_currentSession');
    if (savedSession && userProfiles[savedSession]) {
        currentSession = savedSession;
        currentPlayer = savedSession;
    }
}

function checkAdminSession() {
    const savedAdminSession = localStorage.getItem('toiletDiamondBowl_adminSession');
    if (savedAdminSession === 'true') {
        adminSession = true;
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
    
    // Check deadline
    const now = new Date();
    if (now > SUBMISSION_DEADLINE) {
        document.getElementById('ratings-container').innerHTML = `
            <div class="deadline-message">
                <h3>Submission Deadline Passed</h3>
                <p>The deadline for submitting points was <strong>December 12, 2025 at 5:00 PM</strong>.</p>
                <p>You can no longer submit or modify your picks.</p>
            </div>
        `;
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

    // Check deadline
    const now = new Date();
    if (now > SUBMISSION_DEADLINE) {
        alert(`The submission deadline has passed. The deadline was December 12, 2025 at 5:00 PM.`);
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
    
    // Check deadline
    const now = new Date();
    if (now > SUBMISSION_DEADLINE) {
        document.getElementById('cfp-bracket-container').innerHTML = `
            <div class="deadline-message">
                <h3>Submission Deadline Passed</h3>
                <p>The deadline for submitting your CFP bracket was <strong>December 12, 2025 at 5:00 PM</strong>.</p>
                <p>You can no longer submit or modify your bracket.</p>
            </div>
        `;
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

    // Check deadline
    const now = new Date();
    if (now > SUBMISSION_DEADLINE) {
        alert(`The submission deadline has passed. The deadline was December 12, 2025 at 5:00 PM.`);
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
    
    // Tab switching
    document.querySelectorAll('.standings-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabName = btn.getAttribute('data-tab');
            
            // Update tab buttons
            document.querySelectorAll('.standings-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update tab content
            document.querySelectorAll('.standings-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`standings-${tabName}`).classList.add('active');
            
            // Render picks grid if that tab is selected
            if (tabName === 'picks-grid') {
                renderPicksGrid();
            }
        });
    });
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
            if (rating && rating.points !== undefined && rating.points !== null && game.completed && game.winner) {
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

function renderPicksGrid() {
    const container = document.getElementById('picks-grid-container');
    container.innerHTML = '';
    
    // Get all players
    const players = Object.keys(playerRatings).filter(p => playerRatings[p] && Object.keys(playerRatings[p]).length > 0);
    
    if (players.length === 0) {
        container.innerHTML = '<p>No picks submitted yet.</p>';
        return;
    }
    
    // Create table
    const table = document.createElement('table');
    table.className = 'picks-grid-table';
    
    // Header row
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Game</th>';
    players.forEach(player => {
        const th = document.createElement('th');
        th.textContent = player;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    
    // Data rows
    bowlGames.forEach(game => {
        const row = document.createElement('tr');
        
        // Game name cell
        const gameCell = document.createElement('td');
        gameCell.className = 'game-name-cell';
        const team1Name = game.team1;
        const team2Name = game.team2.split('(')[0].trim();
        gameCell.innerHTML = `
            <strong>${game.name}</strong><br>
            <span class="game-teams">${team1Name} vs ${team2Name}</span>
            ${game.completed && game.winner ? `<br><span class="game-winner">Winner: ${game.winner}</span>` : ''}
        `;
        row.appendChild(gameCell);
        
        // Player picks
        players.forEach(player => {
            const cell = document.createElement('td');
            const rating = playerRatings[player][game.id];
            
            if (rating && rating.winner) {
                if (!game.completed) {
                    // Game not completed yet - show as gray
                    cell.className = 'pending-pick';
                    cell.innerHTML = `
                        <div class="pick-winner">${rating.winner}</div>
                        <div class="pick-points">${rating.points || 'N/A'} pts</div>
                    `;
                } else {
                    // Game completed - show correct/incorrect
                    const isCorrect = game.winner && rating.winner === game.winner;
                    cell.className = isCorrect ? 'correct-pick' : 'incorrect-pick';
                    cell.innerHTML = `
                        <div class="pick-winner">${rating.winner}</div>
                        <div class="pick-points">${rating.points || 'N/A'} pts</div>
                    `;
                }
            } else {
                cell.className = 'no-pick';
                cell.textContent = 'No pick';
            }
            
            row.appendChild(cell);
        });
        
        table.appendChild(row);
    });
    
    container.appendChild(table);
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
    localStorage.setItem('toiletDiamondBowl_bannedIPs', JSON.stringify(bannedIPs));
    localStorage.setItem('toiletDiamondBowl_userIPs', JSON.stringify(userIPs));
    if (currentSession) {
        localStorage.setItem('toiletDiamondBowl_currentSession', currentSession);
    }
    if (adminSession) {
        localStorage.setItem('toiletDiamondBowl_adminSession', 'true');
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
    const savedBannedIPs = localStorage.getItem('toiletDiamondBowl_bannedIPs');
    const savedUserIPs = localStorage.getItem('toiletDiamondBowl_userIPs');
    
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

// Admin Login
function setupAdminLogin() {
    document.getElementById('submit-admin-login').addEventListener('click', handleAdminLogin);
}

function handleAdminLogin() {
    const pinInput = document.getElementById('admin-pin');
    const pin = pinInput.value.trim();
    const messageDiv = document.getElementById('admin-login-message');
    
    if (!pin) {
        messageDiv.textContent = 'Please enter the admin PIN.';
        messageDiv.className = 'error';
        return;
    }
    
    if (pin !== ADMIN_PIN) {
        messageDiv.textContent = 'Invalid admin PIN. Please try again.';
        messageDiv.className = 'error';
        pinInput.value = '';
        return;
    }
    
    // Set admin session
    adminSession = true;
    localStorage.setItem('toiletDiamondBowl_adminSession', 'true');
    saveData();
    
    messageDiv.textContent = 'Admin login successful!';
    messageDiv.className = 'success';
    
    updateNavigation();
    
    setTimeout(() => {
        showPage('admin');
        // Update nav to show admin as active
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === 'admin') {
                link.classList.add('active');
            }
        });
    }, 500);
}

function handleAdminLogout() {
    adminSession = null;
    localStorage.removeItem('toiletDiamondBowl_adminSession');
    saveData();
    updateNavigation();
    showPage('home');
    // Update nav to show home as active
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === 'home') {
            link.classList.add('active');
        }
    });
}

// Admin Page
function setupAdminPage() {
    document.getElementById('admin-logout-button').addEventListener('click', handleAdminLogout);
    
    // Tab switching
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabName = btn.getAttribute('data-tab');
            
            // Update tab buttons
            document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update tab content
            document.querySelectorAll('.admin-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`admin-${tabName}`).classList.add('active');
        });
    });
}

function renderAdminPage() {
    renderAdminBowlGames();
    renderAdminCFPGames();
    renderAdminUserManagement();
}

function renderAdminBowlGames() {
    const container = document.getElementById('admin-bowl-games-list');
    container.innerHTML = '';
    
    bowlGames.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.className = 'admin-game-item';
        
        const team1Name = game.team1;
        const team2Name = game.team2.split('(')[0].trim();
        
        gameDiv.innerHTML = `
            <div class="admin-game-info">
                <h4>${game.name}</h4>
                <p class="admin-game-teams">${team1Name} vs ${team2Name}</p>
                <p class="admin-game-date">${formatDate(game.date)}</p>
                <p class="admin-game-status ${game.completed ? 'completed' : 'pending'}">
                    Status: ${game.completed ? `Completed - Winner: ${game.winner}${game.score ? ` (${game.score})` : ''}` : 'Pending'}
                </p>
            </div>
            <div class="admin-game-controls">
                <label>
                    <input type="checkbox" class="admin-complete-checkbox" data-game-id="${game.id}" ${game.completed ? 'checked' : ''}>
                    Mark as Complete
                </label>
                <select class="admin-winner-select" data-game-id="${game.id}" ${!game.completed ? 'disabled' : ''}>
                    <option value="">Select Winner</option>
                    <option value="${team1Name}" ${game.winner === team1Name ? 'selected' : ''}>${team1Name}</option>
                    <option value="${team2Name}" ${game.winner === team2Name ? 'selected' : ''}>${team2Name}</option>
                </select>
                <div class="admin-score-inputs">
                    <input type="number" class="admin-score-input" data-game-id="${game.id}" data-team="team1" 
                           placeholder="${team1Name} Score" value="${game.team1Score || ''}" 
                           min="0" ${!game.completed ? 'disabled' : ''}>
                    <span class="score-separator">-</span>
                    <input type="number" class="admin-score-input" data-game-id="${game.id}" data-team="team2" 
                           placeholder="${team2Name} Score" value="${game.team2Score || ''}" 
                           min="0" ${!game.completed ? 'disabled' : ''}>
                </div>
                <button class="btn-primary admin-save-game" data-game-id="${game.id}">Save Result</button>
            </div>
        `;
        
        // Enable/disable winner select and score inputs based on checkbox
        const checkbox = gameDiv.querySelector('.admin-complete-checkbox');
        const winnerSelect = gameDiv.querySelector('.admin-winner-select');
        const scoreInputs = gameDiv.querySelectorAll('.admin-score-input');
        
        checkbox.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            winnerSelect.disabled = !isChecked;
            scoreInputs.forEach(input => input.disabled = !isChecked);
            if (!isChecked) {
                winnerSelect.value = '';
                scoreInputs.forEach(input => input.value = '');
            }
        });
        
        // Save button
        const saveBtn = gameDiv.querySelector('.admin-save-game');
        saveBtn.addEventListener('click', () => {
            saveBowlGameResult(game.id);
        });
        
        container.appendChild(gameDiv);
    });
}

function saveBowlGameResult(gameId) {
    const game = bowlGames.find(g => g.id === gameId);
    if (!game) return;
    
    const checkbox = document.querySelector(`.admin-complete-checkbox[data-game-id="${gameId}"]`);
    const winnerSelect = document.querySelector(`.admin-winner-select[data-game-id="${gameId}"]`);
    const team1ScoreInput = document.querySelector(`.admin-score-input[data-game-id="${gameId}"][data-team="team1"]`);
    const team2ScoreInput = document.querySelector(`.admin-score-input[data-game-id="${gameId}"][data-team="team2"]`);
    
    const isComplete = checkbox.checked;
    const winner = winnerSelect.value.trim();
    const team1Score = team1ScoreInput ? parseInt(team1ScoreInput.value) : null;
    const team2Score = team2ScoreInput ? parseInt(team2ScoreInput.value) : null;
    
    if (isComplete && !winner) {
        alert('Please select a winner before marking the game as complete.');
        return;
    }
    
    game.completed = isComplete;
    game.winner = isComplete ? winner : null;
    game.team1Score = isComplete && !isNaN(team1Score) ? team1Score : null;
    game.team2Score = isComplete && !isNaN(team2Score) ? team2Score : null;
    
    // Format score string
    if (isComplete && !isNaN(team1Score) && !isNaN(team2Score)) {
        game.score = `${team1Score} - ${team2Score}`;
    } else {
        game.score = null;
    }
    
    saveData();
    renderStandings();
    renderAdminBowlGames(); // Refresh to show updated status
    
    const scoreText = (game.score ? ` (${game.score})` : '');
    alert(`Game result saved: ${game.name} - ${isComplete ? `Winner: ${winner}${scoreText}` : 'Marked as pending'}`);
}

function renderAdminCFPGames() {
    const container = document.getElementById('admin-cfp-games-list');
    container.innerHTML = '';
    
    const rounds = [
        { name: 'First Round', key: 'firstRound', games: cfpBracket.firstRound },
        { name: 'Quarterfinals', key: 'quarterfinals', games: cfpBracket.quarterfinals },
        { name: 'Semifinals', key: 'semifinals', games: cfpBracket.semifinals },
        { name: 'Championship', key: 'championship', games: cfpBracket.championship }
    ];
    
    rounds.forEach(round => {
        const roundDiv = document.createElement('div');
        roundDiv.className = 'admin-cfp-round';
        roundDiv.innerHTML = `<h4>${round.name}</h4>`;
        
        const gamesContainer = document.createElement('div');
        gamesContainer.className = 'admin-cfp-games';
        
        round.games.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.className = 'admin-game-item';
            
            const team1Name = game.team1 === 'TBD' ? 'TBD' : game.team1;
            const team2Name = game.team2 === 'TBD' || game.team2.startsWith('TBD') ? 'TBD' : game.team2.split('(')[0].trim();
            
            // Get all possible winners (including user predictions)
            const possibleWinners = new Set();
            if (team1Name !== 'TBD') possibleWinners.add(team1Name);
            if (team2Name !== 'TBD') possibleWinners.add(team2Name);
            
            // Add user-predicted teams
            Object.values(playerCFPBrackets).forEach(bracket => {
                const pick = bracket[round.key]?.[game.id];
                if (pick) {
                    if (pick.team1) possibleWinners.add(pick.team1);
                    if (pick.team2) possibleWinners.add(pick.team2);
                    if (pick.winner) possibleWinners.add(pick.winner);
                }
            });
            
            const winnerOptions = Array.from(possibleWinners).sort();
            
            gameDiv.innerHTML = `
                <div class="admin-game-info">
                    <p class="admin-game-teams">${team1Name} vs ${team2Name}</p>
                    <p class="admin-game-date">${formatDate(game.date)}</p>
                    <p class="admin-game-status ${game.completed ? 'completed' : 'pending'}">
                        Status: ${game.completed ? `Completed - Winner: ${game.winner}` : 'Pending'}
                    </p>
                </div>
                <div class="admin-game-controls">
                    <label>
                        <input type="checkbox" class="admin-complete-checkbox" data-round="${round.key}" data-game-id="${game.id}" ${game.completed ? 'checked' : ''}>
                        Mark as Complete
                    </label>
                    <input type="text" class="admin-winner-input" data-round="${round.key}" data-game-id="${game.id}" 
                           placeholder="Enter winner" value="${game.winner || ''}" ${!game.completed ? 'disabled' : ''}>
                    <button class="btn-primary admin-save-cfp-game" data-round="${round.key}" data-game-id="${game.id}">Save Result</button>
                </div>
            `;
            
            // Enable/disable winner input and score inputs based on checkbox
            const checkbox = gameDiv.querySelector('.admin-complete-checkbox');
            const winnerInput = gameDiv.querySelector('.admin-winner-input');
            const scoreInputs = gameDiv.querySelectorAll('.admin-score-input');
            
            checkbox.addEventListener('change', (e) => {
                const isChecked = e.target.checked;
                winnerInput.disabled = !isChecked;
                scoreInputs.forEach(input => input.disabled = !isChecked);
                if (!isChecked) {
                    winnerInput.value = '';
                    scoreInputs.forEach(input => input.value = '');
                }
            });
            
            // Save button
            const saveBtn = gameDiv.querySelector('.admin-save-cfp-game');
            saveBtn.addEventListener('click', () => {
                saveCFPGameResult(round.key, game.id);
            });
            
            gamesContainer.appendChild(gameDiv);
        });
        
        roundDiv.appendChild(gamesContainer);
        container.appendChild(roundDiv);
    });
}

function saveCFPGameResult(round, gameId) {
    const game = cfpBracket[round]?.find(g => g.id === gameId);
    if (!game) return;
    
    const checkbox = document.querySelector(`.admin-complete-checkbox[data-round="${round}"][data-game-id="${gameId}"]`);
    const winnerInput = document.querySelector(`.admin-winner-input[data-round="${round}"][data-game-id="${gameId}"]`);
    const team1ScoreInput = document.querySelector(`.admin-score-input[data-round="${round}"][data-game-id="${gameId}"][data-team="team1"]`);
    const team2ScoreInput = document.querySelector(`.admin-score-input[data-round="${round}"][data-game-id="${gameId}"][data-team="team2"]`);
    
    const isComplete = checkbox.checked;
    const winner = winnerInput.value.trim();
    const team1Score = team1ScoreInput ? parseInt(team1ScoreInput.value) : null;
    const team2Score = team2ScoreInput ? parseInt(team2ScoreInput.value) : null;
    
    if (isComplete && !winner) {
        alert('Please enter a winner before marking the game as complete.');
        return;
    }
    
    game.completed = isComplete;
    game.winner = isComplete ? winner : null;
    game.team1Score = isComplete && !isNaN(team1Score) ? team1Score : null;
    game.team2Score = isComplete && !isNaN(team2Score) ? team2Score : null;
    
    // Format score string
    if (isComplete && !isNaN(team1Score) && !isNaN(team2Score)) {
        game.score = `${team1Score} - ${team2Score}`;
    } else {
        game.score = null;
    }
    
    saveData();
    renderStandings();
    renderAdminCFPGames(); // Refresh to show updated status
    
    const scoreText = (game.score ? ` (${game.score})` : '');
    alert(`CFP ${round} game result saved: ${isComplete ? `Winner: ${winner}${scoreText}` : 'Marked as pending'}`);
}

// User Management
function renderAdminUserManagement() {
    renderAdminUsersList();
    renderAdminBannedIPsList();
}

function renderAdminUsersList() {
    const container = document.getElementById('admin-users-list');
    container.innerHTML = '';
    
    const users = Object.keys(userProfiles);
    
    if (users.length === 0) {
        container.innerHTML = '<p>No users found.</p>';
        return;
    }
    
    const usersList = document.createElement('div');
    usersList.className = 'admin-users-table';
    
    users.forEach(userName => {
        const profile = userProfiles[userName];
        const userIP = userIPs[userName] || [];
        const hasRatings = playerRatings[userName] && Object.keys(playerRatings[userName]).length > 0;
        const hasCFP = playerCFPBrackets[userName] && Object.keys(playerCFPBrackets[userName]).length > 0;
        const messageCount = trashTalkMessages.filter(m => m.author === userName).length;
        
        const userDiv = document.createElement('div');
        userDiv.className = 'admin-user-item';
        userDiv.innerHTML = `
            <div class="admin-user-info">
                <h4>${userName}</h4>
                <p class="admin-user-details">
                    <strong>IP Addresses:</strong> ${userIP.length > 0 ? userIP.join(', ') : 'None recorded'}<br>
                    <strong>Created:</strong> ${new Date(profile.createdAt).toLocaleDateString()}<br>
                    <strong>Has Ratings:</strong> ${hasRatings ? 'Yes' : 'No'}<br>
                    <strong>Has CFP Bracket:</strong> ${hasCFP ? 'Yes' : 'No'}<br>
                    <strong>Trash Talk Messages:</strong> ${messageCount}
                </p>
            </div>
            <div class="admin-user-actions">
                <button class="btn-danger admin-ban-user" data-username="${userName}">Ban IP</button>
                <button class="btn-danger admin-delete-user" data-username="${userName}">Delete User</button>
            </div>
        `;
        
        // Ban user button
        const banBtn = userDiv.querySelector('.admin-ban-user');
        banBtn.addEventListener('click', () => {
            banUserIPs(userName);
        });
        
        // Delete user button
        const deleteBtn = userDiv.querySelector('.admin-delete-user');
        deleteBtn.addEventListener('click', () => {
            deleteUser(userName);
        });
        
        usersList.appendChild(userDiv);
    });
    
    container.appendChild(usersList);
}

function renderAdminBannedIPsList() {
    const container = document.getElementById('admin-banned-ips-list');
    container.innerHTML = '';
    
    if (bannedIPs.length === 0) {
        container.innerHTML = '<p>No IPs are currently banned.</p>';
        return;
    }
    
    const bannedList = document.createElement('div');
    bannedList.className = 'admin-banned-ips-table';
    
    bannedIPs.forEach(ip => {
        // Find users with this IP
        const usersWithIP = Object.keys(userIPs).filter(user => userIPs[user].includes(ip));
        
        const ipDiv = document.createElement('div');
        ipDiv.className = 'admin-banned-ip-item';
        ipDiv.innerHTML = `
            <div class="admin-ip-info">
                <strong>${ip}</strong>
                ${usersWithIP.length > 0 ? `<br><span style="color: #666; font-size: 0.9em;">Users: ${usersWithIP.join(', ')}</span>` : ''}
            </div>
            <div class="admin-ip-actions">
                <button class="btn-secondary admin-unban-ip" data-ip="${ip}">Unban</button>
            </div>
        `;
        
        const unbanBtn = ipDiv.querySelector('.admin-unban-ip');
        unbanBtn.addEventListener('click', () => {
            unbanIP(ip);
        });
        
        bannedList.appendChild(ipDiv);
    });
    
    container.appendChild(bannedList);
}

function banUserIPs(userName) {
    if (!confirm(`Are you sure you want to ban all IP addresses associated with user "${userName}"? This will prevent them from accessing the site.`)) {
        return;
    }
    
    const userIP = userIPs[userName] || [];
    if (userIP.length === 0) {
        alert('No IP addresses found for this user.');
        return;
    }
    
    userIP.forEach(ip => {
        if (!bannedIPs.includes(ip)) {
            bannedIPs.push(ip);
        }
    });
    
    saveData();
    renderAdminUserManagement();
    alert(`Banned ${userIP.length} IP address(es) for user "${userName}".`);
}

function unbanIP(ip) {
    if (!confirm(`Are you sure you want to unban IP address "${ip}"?`)) {
        return;
    }
    
    const index = bannedIPs.indexOf(ip);
    if (index > -1) {
        bannedIPs.splice(index, 1);
        saveData();
        renderAdminUserManagement();
        alert(`IP address "${ip}" has been unbanned.`);
    }
}

function deleteUser(userName) {
    if (!confirm(`Are you sure you want to delete user "${userName}"? This will permanently remove:\n- User profile\n- All ratings\n- CFP bracket\n- Trash talk messages\n\nThis action cannot be undone!`)) {
        return;
    }
    
    // Delete user profile
    delete userProfiles[userName];
    
    // Delete ratings
    delete playerRatings[userName];
    
    // Delete CFP bracket
    delete playerCFPBrackets[userName];
    
    // Delete trash talk messages
    trashTalkMessages = trashTalkMessages.filter(m => m.author !== userName);
    
    // Delete user IPs
    delete userIPs[userName];
    
    // If this was the current session, log them out
    if (currentSession === userName) {
        currentSession = null;
        currentPlayer = '';
        localStorage.removeItem('toiletDiamondBowl_currentSession');
    }
    
    saveData();
    renderStandings();
    renderAdminUserManagement();
    renderTrashTalk(); // Refresh trash talk if on that page
    
    alert(`User "${userName}" has been deleted.`);
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

