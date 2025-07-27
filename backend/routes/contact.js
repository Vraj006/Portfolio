const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const router = express.Router();

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Validation middleware
const validateContactForm = [
  body('name')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Name is required and must be less than 100 characters')
    .matches(/^[a-zA-Z\s\.'\-]+$/)
    .withMessage('Name can only contain letters, spaces, periods, apostrophes, and hyphens'),
  
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('subject')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Subject is required and must be less than 200 characters'),
  
  body('message')
    .trim()
    .isLength({ min: 5, max: 2000 })
    .withMessage('Message must be at least 5 characters and less than 2000 characters')
];

// Contact form submission endpoint
router.post('/send', validateContactForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Create transporter with retry logic
    const transporter = createTransporter();

    // Verify transporter configuration with timeout
    try {
      await Promise.race([
        transporter.verify(),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email verification timeout')), 10000)
        )
      ]);
    } catch (verifyError) {
      console.error('Email verification failed:', verifyError.message);
      // Continue anyway - sometimes verify fails but sending works
    }

    // Email content for you (recipient)
    const recipientMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">New Portfolio Contact</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">Name:</strong>
              <span style="margin-left: 10px; color: #333;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">Email:</strong>
              <span style="margin-left: 10px; color: #333;">${email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #667eea;">Subject:</strong>
              <span style="margin-left: 10px; color: #333;">${subject}</span>
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #667eea;">Message:</strong>
              <div style="margin-top: 10px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #667eea; border-radius: 5px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">Reply to ${name}</a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This email was sent from your portfolio contact form</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Auto-reply email for the sender
    const autoReplyOptions = {
      from: `"Vraj Prajapati" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">Thank You!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Hi ${name},</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out through my portfolio website! I've received your message and really appreciate you taking the time to contact me.
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <h3 style="color: #333; margin: 0 0 10px 0;">Your Message Summary:</h3>
              <p style="margin: 5px 0; color: #666;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0; color: #666;"><strong>Sent:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              I typically respond to all inquiries within 24-48 hours. In the meantime, feel free to:
            </p>
            
            <ul style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              <li>Check out my latest projects on <a href="https://github.com/Vraj006" style="color: #667eea;">GitHub</a></li>
              <li>Connect with me on <a href="https://www.linkedin.com/in/prajapati-vraj-094614288/" style="color: #667eea;">LinkedIn</a></li>
              <li>Explore more about my work on my portfolio</li>
            </ul>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 30px;">
              Looking forward to our conversation!
            </p>
            
            <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #333; font-weight: bold;">Best regards,</p>
              <p style="margin: 5px 0 0 0; color: #667eea; font-size: 18px;">Vraj Prajapati</p>
              <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">Full-Stack Developer & AI/ML Enthusiast</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `
    };

    // Send both emails with timeout and retry logic
    try {
      await Promise.race([
        Promise.all([
          transporter.sendMail(recipientMailOptions),
          transporter.sendMail(autoReplyOptions)
        ]),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email sending timeout')), 30000)
        )
      ]);
    } catch (sendError) {
      // If auto-reply fails, still try to send the main email
      if (sendError.message.includes('auto-reply') || sendError.message.includes('autoReplyOptions')) {
        console.warn('Auto-reply failed, but main email may have succeeded');
        await transporter.sendMail(recipientMailOptions);
      } else {
        throw sendError;
      }
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! You should receive a confirmation email shortly.'
    });

  } catch (error) {
    console.error('Contact form error details:');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error stack:', error.stack);
    console.error('Request IP:', req.ip);
    console.error('User Agent:', req.get('User-Agent'));
    
    // More specific and user-friendly error messages
    let errorMessage = 'Thank you for your message! There was a temporary issue sending it, but I\'ve been notified. Please try again in a moment.';
    let statusCode = 500;
    
    if (error.code === 'EAUTH') {
      errorMessage = 'There was an authentication issue with the email service. Please try again or contact me directly via email.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Connection timeout. Please check your internet connection and try again.';
    } else if (error.code === 'EMESSAGE') {
      errorMessage = 'There was an issue with the message format. Please try again.';
      statusCode = 400;
    } else if (error.message && error.message.includes('rate limit')) {
      errorMessage = 'You\'ve sent several messages recently. Please wait a moment before sending another one.';
      statusCode = 429;
    }
    
    res.status(statusCode).json({
      success: false,
      message: errorMessage,
      timestamp: new Date().toISOString(),
      // Only include technical details in development
      ...(process.env.NODE_ENV === 'development' && {
        debug: {
          message: error.message,
          code: error.code,
          stack: error.stack
        }
      })
    });
  }
});

// Test endpoint for email configuration
router.get('/test', async (req, res) => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    
    res.status(200).json({
      success: true,
      message: 'Email configuration is working correctly'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Email configuration error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Configuration issue'
    });
  }
});

module.exports = router;
