# Backend Setup for Email Functionality

## Overview
To enable the contact form to send emails to your inbox instead of just opening the default email client, you'll need to set up a backend server.

## Option 1: Simple Node.js/Express Backend

### 1. Create backend folder structure:
```
portfolio-backend/
├── package.json
├── server.js
├── routes/
│   └── contact.js
└── .env
```

### 2. Install dependencies:
```bash
npm init -y
npm install express cors dotenv nodemailer
npm install -D nodemon
```

### 3. Create server.js:
```javascript
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 4. Create routes/contact.js:
```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // App password, not regular password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact from ${name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;
```

### 5. Create .env file:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### 6. Update package.json scripts:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemailer server.js"
  }
}
```

## Option 2: Deploy on Vercel/Netlify

### For Vercel:
1. Create `/api/contact.js` in your React project
2. Use Vercel's serverless functions
3. Deploy directly from GitHub

### For Netlify:
1. Use Netlify Functions
2. Create `/.netlify/functions/contact.js`
3. Deploy with automatic builds

## Option 3: Third-party Services

### EmailJS (Recommended for simple setups):
1. Sign up at emailjs.com
2. Install: `npm install @emailjs/browser`
3. Configure service, template, and user ID
4. Use in React component without backend

### Formspree:
1. Sign up at formspree.io
2. Get form endpoint
3. Send POST requests directly from React

## Security Considerations

1. **Never expose credentials** in frontend code
2. **Use environment variables** for sensitive data
3. **Implement rate limiting** to prevent spam
4. **Validate and sanitize** all inputs
5. **Use CORS** properly to restrict origins
6. **Enable HTTPS** in production

## Frontend Integration

Update your Contact component to use the backend:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message. Please try again.');
  }
};
```

## Deployment

1. **Development**: Run both frontend and backend locally
2. **Production**: Deploy backend to Heroku, Railway, or similar
3. **Update frontend**: Change API URLs to production endpoints
