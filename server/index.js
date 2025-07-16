import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });


  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      text: message,
    });

    res.send('Email sent successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send email');
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`✅ Server running on http://localhost:${PORT}`);
});
