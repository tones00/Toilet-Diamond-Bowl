// API Client for backend communication
const API_BASE_URL = window.location.origin; // Use same origin as the page
let socket = null;

// Initialize Socket.io connection
function initSocket() {
    if (typeof io !== 'undefined') {
        socket = io();
        
        socket.on('connect', () => {
            console.log('Connected to server');
        });
        
        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
        
        // Listen for real-time updates
        socket.on('ratingsUpdated', (data) => {
            if (window.onRatingsUpdated) {
                window.onRatingsUpdated(data);
            }
        });
        
        socket.on('cfpBracketUpdated', (data) => {
            if (window.onCFPBracketUpdated) {
                window.onCFPBracketUpdated(data);
            }
        });
        
        socket.on('gameUpdated', (data) => {
            if (window.onGameUpdated) {
                window.onGameUpdated(data);
            }
        });
        
        socket.on('cfpGameUpdated', (data) => {
            if (window.onCFPGameUpdated) {
                window.onCFPGameUpdated(data);
            }
        });
        
        socket.on('newMessage', (message) => {
            if (window.onNewMessage) {
                window.onNewMessage(message);
            }
        });
        
        socket.on('reactionUpdated', (data) => {
            if (window.onReactionUpdated) {
                window.onReactionUpdated(data);
            }
        });
        
        socket.on('userColorUpdated', (data) => {
            if (window.onUserColorUpdated) {
                window.onUserColorUpdated(data);
            }
        });
    }
}

// API Helper Functions
async function apiRequest(endpoint, options = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}/api${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'API request failed');
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// User API
const userAPI = {
    getAll: () => apiRequest('/users'),
    get: (name) => apiRequest(`/users/${name}`),
    create: (name, key, ip) => apiRequest('/users', {
        method: 'POST',
        body: JSON.stringify({ name, key, ip })
    }),
    updateColor: (playerName, color) => apiRequest(`/users/${playerName}/color`, {
        method: 'PUT',
        body: JSON.stringify({ color })
    })
};

// Ratings API
const ratingsAPI = {
    getAll: () => apiRequest('/ratings'),
    get: (playerName) => apiRequest(`/ratings/${playerName}`),
    save: (playerName, ratings) => apiRequest(`/ratings/${playerName}`, {
        method: 'POST',
        body: JSON.stringify({ ratings })
    })
};

// CFP Bracket API
const cfpBracketAPI = {
    getAll: () => apiRequest('/cfp-brackets'),
    get: (playerName) => apiRequest(`/cfp-brackets/${playerName}`),
    save: (playerName, bracket) => apiRequest(`/cfp-brackets/${playerName}`, {
        method: 'POST',
        body: JSON.stringify({ bracket })
    })
};

// Games API
const gamesAPI = {
    getBowlGames: () => apiRequest('/games'),
    updateBowlGame: (gameId, updates) => apiRequest(`/games/${gameId}`, {
        method: 'PUT',
        body: JSON.stringify(updates)
    }),
    getCFPGames: () => apiRequest('/cfp-games'),
    updateCFPGame: (round, gameId, updates) => apiRequest(`/cfp-games/${round}/${gameId}`, {
        method: 'PUT',
        body: JSON.stringify(updates)
    })
};

// Trash Talk API
const trashTalkAPI = {
    getAll: () => apiRequest('/trash-talk'),
    create: (message) => apiRequest('/trash-talk', {
        method: 'POST',
        body: JSON.stringify(message)
    }),
    toggleReaction: (messageId, reactionType, playerName) => apiRequest(`/trash-talk/${messageId}/reaction`, {
        method: 'POST',
        body: JSON.stringify({ reactionType, playerName })
    })
};

// Admin API
const adminAPI = {
    getBannedIPs: () => apiRequest('/admin/banned-ips'),
    banIP: (ip) => apiRequest('/admin/ban-ip', {
        method: 'POST',
        body: JSON.stringify({ ip })
    }),
    unbanIP: (ip) => apiRequest(`/admin/ban-ip/${ip}`, {
        method: 'DELETE'
    }),
    deleteUser: (playerName) => apiRequest(`/admin/users/${playerName}`, {
        method: 'DELETE'
    })
};

// Export API object
window.API = {
    user: userAPI,
    ratings: ratingsAPI,
    cfpBracket: cfpBracketAPI,
    games: gamesAPI,
    trashTalk: trashTalkAPI,
    admin: adminAPI,
    initSocket: initSocket
};

