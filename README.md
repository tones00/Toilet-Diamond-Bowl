# Toilet Diamond Bowl

A fantasy football website for college football bowl games where players assign point values to games and compete to see who can accumulate the most points.

## Features

### 🏈 Regular Bowl Games
- **Point Submission System**: Players assign points from 1 to N (where N is the total number of games) to each bowl game
- **Unique Point Values**: Each point value can only be used once - no duplicates allowed
- **Winner Selection**: Players must select a winning team for each game to submit their ratings
- **Real-time Validation**: Instant feedback when duplicate points are entered or winners are missing
- **41 Bowl Games**: Complete 2025-26 bowl game schedule with betting odds displayed

### 🏆 College Football Playoff (CFP) Bracket
- **March Madness-Style Bracket**: Separate bracket system for CFP games
- **Team Prediction**: For games with TBD teams, players can input which schools they think will advance
- **Multi-Round Scoring**:
  - First Round: 5 points per correct pick
  - Quarterfinals: 10 points per correct pick
  - Semifinals: 15 points per correct pick
  - Championship: 20 points per correct pick
  - Perfect Bracket Bonus: 30 additional points if all picks are correct

### 💬 Trash Talk Channel
- **Discord-Style Chat**: Interactive messaging channel for logged-in users
- **Message Format**: `userName: message` format with customizable username colors
- **Emoji Reactions**: Add reactions to messages (👍, 👎, 😂, 😢, 🙃, 🔥)
- **Reply System**: Reply directly to messages with context
- **Link Support**: Automatically formats and makes links clickable
- **Hover Controls**: Reaction and reply buttons appear on hover for a clean interface

### 📊 Standings & History
- **Live Standings**: Real-time leaderboard showing:
  - Bowl Points
  - CFP Points
  - Total Points
  - Games Correct
- **Game History**: View past game results and outcomes

### 🔐 User Authentication
- **Access Key System**: Sign up requires a valid access key
- **User Profiles**: Each user can customize their username color
- **Session Management**: Persistent login sessions

## Getting Started

### Local Development

1. **Clone or download the repository**

2. **Open the website**:
   - Simply open `index.html` in a web browser, or
   - Use a local server (recommended for network access)

3. **Run a local server** (for network access):
   ```bash
   python3 -m http.server 8000
   ```
   Then access the site at `http://localhost:8000` or `http://YOUR_IP_ADDRESS:8000` from other devices on the same network

### First Time Setup

1. **Sign Up**: 
   - Navigate to the "Sign Up" page
   - Enter a valid access key (currently: `RETURN OF THE BOWL2025`)
   - Create your profile with a username

2. **Submit Points**:
   - Go to "Point Submission" (visible after login)
   - Assign points 1-N to each bowl game
   - Select a winner for each game
   - Points must be unique (no duplicates)
   - Submit your ratings

3. **Fill CFP Bracket**:
   - Go to "CFP Bracket" (visible after login)
   - For first round games, select winners from dropdowns
   - For later rounds with TBD teams, enter which schools you think will advance
   - Select winners for each game
   - Save your bracket

4. **Check Standings**:
   - View the "Standings" page to see how you rank against other players
   - Points are calculated automatically as games are completed

## File Structure

```
toiletDiamondBowl/
├── index.html      # Main HTML structure
├── styles.css      # All styling and layout
├── app.js          # Application logic and data
└── README.md       # This file
```

## Data Storage

All data is stored locally in the browser using `localStorage`:
- `playerRatings`: Point assignments and winner picks for bowl games
- `playerCFPBrackets`: CFP bracket predictions
- `userProfiles`: User account information
- `gameResults`: Completed game results
- `trashTalkMessages`: Chat messages and reactions
- `currentSession`: Active user session

## Customization

### Adding Access Keys
Edit `VALID_KEYS` array in `app.js`:
```javascript
const VALID_KEYS = [
    'RETURN OF THE BOWL2025',
    'YOUR_NEW_KEY_HERE',
];
```

### Updating Bowl Games
Edit the `bowlGames` array in `app.js` to add or modify bowl games. Each game should have:
- `id`: Unique identifier
- `name`: Bowl game name
- `team1`: First team name
- `team2`: Second team name (with odds in parentheses if available)
- `date`: Game date (YYYY-MM-DD format)
- `completed`: Boolean indicating if game is finished
- `winner`: Winning team name (null if not completed)

### Updating CFP Bracket
Edit the `cfpBracket` object in `app.js` to modify CFP games. Use "TBD" for teams that haven't been determined yet.

## Scoring System

### Regular Bowl Games
- Players assign points 1-N to each game
- After games are played, players receive the points they assigned to their correctly picked winners
- Highest total points wins

### CFP Bracket
- Points awarded per round:
  - First Round: 5 pts
  - Quarterfinals: 10 pts
  - Semifinals: 15 pts
  - Championship: 20 pts
- Perfect Bracket Bonus: +30 points if all picks are correct

## Browser Compatibility

Works best in modern browsers that support:
- ES6 JavaScript features
- localStorage API
- CSS Grid and Flexbox

## Notes

- All data is stored locally in the browser - clearing browser data will reset everything
- The site works offline once loaded
- For production use, consider implementing a backend database for persistent storage across devices

## License

This project is for personal/educational use.
