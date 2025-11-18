// /api/send-email.js

import nodemailer from 'nodemailer';
import cors from 'cors';

// Initialize CORS middleware
const corsHandler = cors({
  methods: ['POST', 'OPTIONS'],
});

// Helper to run middleware
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  // Run the CORS middleware
  await runMiddleware(req, res, corsHandler);

  // Vercel automatically handles OPTIONS requests for CORS preflight,
  // but we can explicitly handle it if needed.
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // We only want to handle POST requests for sending the email
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

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

  // Securely get your credentials from Vercel Environment Variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS, // Use the App Password here
    },
  });

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
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ message: "Failed to send email. Please try again later." });
  }
}
