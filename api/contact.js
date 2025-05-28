// api/contact.ts

import { Resend } from 'resend';

const resend = new Resend('re_G4m4RDe3_3cmdgzznuvS3gcP37nUuLT8g');

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    console.log('Missing fields:', { name, email, message });
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    console.log('Attempting to send email with data:', {
      name,
      email,
      phone,
      subject,
      messageLength: message?.length
    });

    const { data, error } = await resend.emails.send({
      // from: 'onboarding@resend.dev',
      from: 'mpdandco-website@mpdandco.com',
      to: ['audit@mpdandco.com'],
      subject: `New Contact: ${subject || 'No Subject'}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ message: error.message });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Server error:', {
      name: err.name,
      message: err.message,
      stack: err.stack
    });
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
