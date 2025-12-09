# Backend Setup Instructions

This guide will help you set up the backend server so players can interact across different locations.

## 🌐 Custom Domain Setup

**If you're hosting on a custom domain (e.g., toiletdiamondbowl.fun):**

The website is already configured to work with your custom domain! The API client automatically detects your domain and uses it for all API calls. No additional configuration needed.

**Important Notes:**
- Your hosting service should automatically set the `PORT` environment variable
- The server will listen on the port provided by your hosting service
- Socket.io is configured to work with your domain
- All API endpoints will be available at `https://toiletdiamondbowl.fun/api/*`

## Local Development vs Production

The server automatically detects if it's running in production mode:
- **Production**: Uses your custom domain for CORS
- **Development**: Allows all origins (for local testing)

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

3. **Access the Website**
   - Local: http://localhost:3000
   - Network: http://YOUR_IP_ADDRESS:3000

## How It Works

### Database
- Uses SQLite database (`toilet_diamond_bowl.db`)
- Automatically created on first run
- All data is stored persistently in the database file

### Real-Time Updates
- Uses Socket.io for real-time communication
- Players see updates instantly when:
  - Someone submits picks
  - Admin updates game results
  - New trash talk messages
  - Reactions are added

### API Endpoints
All data operations go through REST API endpoints:
- `/api/users` - User management
- `/api/ratings` - Point submissions
- `/api/cfp-brackets` - CFP bracket picks
- `/api/games` - Bowl game results
- `/api/trash-talk` - Chat messages

## Deployment Options

### Option 1: Local Network (Same WiFi)
1. Find your computer's IP address
2. Start the server: `npm start`
3. Share the URL: `http://YOUR_IP:3000`
4. Players on the same network can access it

### Option 2: Cloud Hosting (Recommended for cross-location)
Popular options:
- **Heroku**: Free tier available (add Procfile to root)
- **Railway**: Easy deployment
- **Render**: Free tier available
- **DigitalOcean**: $5/month droplet
- **Custom Domain**: Already configured for toiletdiamondbowl.fun

**For Custom Domain Hosting:**
1. Deploy your code to your hosting service
2. Point your domain (toiletdiamondbowl.fun) to your hosting service
3. The server will automatically detect production mode
4. No additional configuration needed!

### Option 3: VPS/Server
- Deploy to any VPS provider
- Use PM2 for process management: `pm2 start server.js`
- Set up reverse proxy with nginx

## Port Configuration

Default port is 3000. To change it:
```bash
PORT=8080 npm start
```

Or set environment variable:
```bash
export PORT=8080
npm start
```

## Database Backup

The database file (`toilet_diamond_bowl.db`) contains all your data. 
**Important**: Back up this file regularly!

To backup:
```bash
cp toilet_diamond_bowl.db toilet_diamond_bowl_backup.db
```

## Troubleshooting

### Port Already in Use
If port 3000 is taken, use a different port:
```bash
PORT=3001 npm start
```

### Database Errors
If you encounter database errors, delete `toilet_diamond_bowl.db` and restart the server (this will recreate the database but lose all data).

### CORS Issues
The server is configured to accept requests from any origin. If you have issues, check the CORS settings in `server.js`.

## Security Notes

- The server accepts connections from any IP (0.0.0.0)
- For production, consider adding authentication
- Use HTTPS in production
- Consider rate limiting for API endpoints

## Next Steps

1. Install dependencies: `npm install`
2. Start server: `npm start`
3. Access website at http://localhost:3000
4. Share your IP address with players
5. Everyone can now see and interact with each other!
