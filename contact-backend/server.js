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
  res.send("Server is up and running.");
});

// Email sending route
app.post("/send", async (req, res) => {
  const { firstName, lastName, email, phone, jobTitle, company, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const mailOptions = {
    from: process.env.MAIL_USER,
    replyTo: email,
    to: "Newsmakerdesk@gmail.com, konnectwithkunal@gmail.com",
    subject: `New Inquiry on News Maker Group Website from ${firstName} ${lastName}`,
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Job Title:</strong> ${jobTitle || "-"}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("❌ Email error:", err);
    res.status(500).json({ message: "Failed to send email." });
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
