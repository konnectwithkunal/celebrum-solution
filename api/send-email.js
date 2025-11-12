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

  const { firstName, lastName, email, phone, jobTitle, company, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
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
    replyTo: email,
    to: "Newsmakerdesk@gmail.com, konnectwithkunal@gmail.com",
    subject: `New Inquiry on News Maker Group Website from ${firstName} ${lastName}`,
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Job Title:</strong> ${jobTitle || "-"}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ message: "Failed to send email." });
  }
}