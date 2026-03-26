import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD) {
      return NextResponse.json(
        { error: 'Email configuration missing' },
        { status: 500 }
      );
    }

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Email to send to the company
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'everlycarehome@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message from EverlyCareHome Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the user
    const confirmationEmail = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We received your message - EverlyCareHome',
      html: `
        <h2>Thank you for contacting EverlyCareHome</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>EverlyCareHome Team</p>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
