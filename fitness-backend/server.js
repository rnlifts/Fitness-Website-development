// // Import Required Packages -- Load all the libraries we need
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

// // Load Environment Variables -- Get email credentials from .env file
dotenv.config();

// // Create Express App -- Initialize the server
const app = express();

// // Setup Middleware -- Allow JSON data and cross-origin requests
app.use(cors()); // Allows React (localhost:5173) to talk to this server
app.use(express.json()); // Allows server to read JSON data from requests

// // Configure Nodemailer Transporter -- Setup email sending service
const transporter = nodemailer.createTransport({
  service: 'gmail', // Using Gmail SMTP server
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address from .env
    pass: process.env.EMAIL_PASS  // Your Gmail App Password from .env
  }
});

// Test Email Configuration -- Verify connection works on startup
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email configuration error:', error);
  } else {
    console.log('✅ Server is ready to send emails');
  }
});

// Create API Endpoint -- Route that receives form submissions
app.post('/api/send-email', async (req, res) => {
  
  // Extract Form Data -- Get data sent from React form
  const { name, email, phone, service, message } = req.body;

  // Validate Required Fields -- Make sure we have the essential data
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name, email, and message are required' 
    });
  }

  // Prepare Email Content -- Create the email that will be sent
  const mailOptions = {
    from: process.env.EMAIL_USER,           // From your Gmail
    to: process.env.EMAIL_USER,             // To your Gmail (you receive it)
    subject: `🏋️ New Contact from ${name}`, // Email subject line
    replyTo: email,                         // When you hit reply, goes to user's email
    
    // HTML Email Body -- Formatted email with all form details
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #EF4444 0%, #3B82F6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: bold; color: #1F2937; margin-bottom: 5px; }
          .value { color: #4B5563; }
          .message-box { background: white; padding: 20px; border-left: 4px solid #3B82F6; margin-top: 20px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏋️ New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            
            <div class="field">
              <div class="label">📱 Phone:</div>
              <div class="value">${phone || 'Not provided'}</div>
            </div>
            
            <div class="field">
              <div class="label">🎯 Service Interested In:</div>
              <div class="value">${service || 'Not specified'}</div>
            </div>
            
            <div class="message-box">
              <div class="label">💬 Message:</div>
              <div class="value">${message}</div>
            </div>
            
            <div class="footer">
              <p>Sent from your Fitness Website Contact Form</p>
              <p>To reply, just hit the reply button - it will go directly to ${email}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  };

  // Send Email -- Actually send the email using Nodemailer
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    
    // Return Success Response -- Tell React it worked
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
    
  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    // Return Error Response -- Tell React something went wrong
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email. Please try again later.' 
    });
  }
});

// Health Check Endpoint -- Simple route to test if server is running
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running! 🚀' });
});

// Start Server -- Listen for incoming requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email service configured with: ${process.env.EMAIL_USER}`);
});