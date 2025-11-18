require('dotenv').config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Replaced body-parser

// Validate environment variables
if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
  console.error("❌ Missing MAIL_USER or MAIL_PASS environment variables");
  process.exit(1);
}

// Setup the transporter
let transporter;
try {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
} catch (err) {
  console.error("❌ Failed to create nodemailer transporter:", err);
  process.exit(1);
}

// Root route
app.get("/", (req, res) => {
  res.send("Contact Form Server is up and running.");
});

// Email sending route
app.post("/send", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validate required fields - name, subject, and message are always required
  if (!name || !subject || !message) {
    return res.status(400).json({ message: "Name, subject, and message are required" });
  }

  // At least one contact method (email or phone) must be provided
  if (!email && !phone) {
    return res.status(400).json({ message: "Either email or phone number is required" });
  }

  // Validate email format if provided
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const mailOptions = {
    from: process.env.MAIL_USER,
    replyTo: email || process.env.MAIL_USER,
    to: "Info@cerebrumsolutions.in",
    subject: `Contact Form: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <hr/>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email || "Not provided"}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p style="padding: 15px; background-color: #f5f5f5; border-left: 4px solid #84D14A; white-space: pre-wrap;">${message}</p>
      <hr/>
      <p style="color: #666; font-size: 12px;">This email was sent from the contact form on your website.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(500).json({ message: "Failed to send email. Please try again later." });
  }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running at http://0.0.0.0:${PORT}`);
});

// Handle uncaught errors
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

console.log("MAIL_USER in use:", process.env.MAIL_USER);
