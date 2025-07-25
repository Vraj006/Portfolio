# Portfolio Backend API

A Node.js/Express backend API for Vraj's portfolio website contact form functionality.

## Features

- ✅ **Contact Form API** - Handles form submissions with validation
- ✅ **Email Integration** - Sends emails using Nodemailer (Gmail SMTP)
- ✅ **Auto-Reply System** - Automatic confirmation emails to users
- ✅ **Rate Limiting** - Prevents spam with configurable limits
- ✅ **Security** - Helmet, CORS, input validation
- ✅ **Professional Email Templates** - Beautiful HTML email designs
- ✅ **Error Handling** - Comprehensive error handling and logging

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email sending
- **Express Validator** - Input validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logging
- **Express Rate Limit** - Rate limiting

## Quick Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Gmail SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com

# CORS Configuration
FRONTEND_URL=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### 3. Gmail App Password Setup

1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account settings → Security → 2-Step Verification
3. Generate an "App Password" for this application
4. Use the generated password in `EMAIL_PASS` (not your regular Gmail password)

### 4. Start the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /api/health
```
Returns server status and configuration info.

### Contact Form
```
POST /api/contact/send
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Hello from your portfolio",
  "message": "Your message content here"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message sent successfully! You should receive a confirmation email shortly."
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [...]
}
```

### Email Configuration Test
```
GET /api/contact/test
```
Tests if email configuration is working correctly.

## Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Comprehensive validation for all form fields
- **CORS Protection**: Only allows requests from configured frontend URL
- **Security Headers**: Helmet.js for security headers
- **Error Handling**: No sensitive information leaked in errors

## Email Templates

The API sends two types of emails:

1. **Notification Email** (to you) - Contains the contact form submission
2. **Auto-Reply Email** (to sender) - Professional confirmation email

Both emails feature:
- Beautiful HTML templates with gradients and styling
- Responsive design
- Professional branding
- Clear call-to-action buttons

## Development

### Project Structure
```
backend/
├── package.json          # Dependencies and scripts
├── server.js            # Main server file
├── routes/
│   └── contact.js       # Contact form routes
├── .env.example         # Environment variables template
└── README.md           # This file
```

### Adding New Features

1. Create new route files in `/routes`
2. Add route imports to `server.js`
3. Update this README with new endpoints

## Deployment

### Environment Variables for Production

Make sure to set these in your production environment:
- `NODE_ENV=production`
- `FRONTEND_URL=https://your-domain.com`
- All email configuration variables

### Recommended Hosting

- **Heroku** - Easy deployment with environment variables
- **Vercel** - Serverless functions
- **Railway** - Simple deployment
- **DigitalOcean App Platform** - Managed hosting

## Troubleshooting

### Common Issues

1. **Email not sending**
   - Check Gmail app password is correct
   - Verify 2FA is enabled on Gmail
   - Test with `/api/contact/test` endpoint

2. **CORS errors**
   - Ensure `FRONTEND_URL` matches your React app URL
   - Check if frontend is running on the correct port

3. **Rate limiting issues**
   - Adjust `RATE_LIMIT_MAX_REQUESTS` and `RATE_LIMIT_WINDOW_MS`
   - Clear browser cache/cookies

### Logs

Check server logs for detailed error information:
```bash
npm run dev  # Shows detailed logs in development
```

## License

MIT License - feel free to use this for your own portfolio!

---

**Created by Vraj Prajapati** - Full-Stack Developer & AI/ML Enthusiast
