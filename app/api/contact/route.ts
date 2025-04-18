import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send email to you (the portfolio owner)
    const ownerEmail = await resend.emails.send({
      from: 'Portfolio Contact <contact@fenilvaghasiya.com>',
      to: 'fenilvaghasiya22@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    // Send acknowledgment email to the sender
    const senderEmail = await resend.emails.send({
      from: 'Fenil Vaghasiya <contact@fenilvaghasiya.com>',
      replyTo: 'fenilvaghasiya22@gmail.com',
      to: email,
      subject: `Thank you for your message - ${subject}`,
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>I have received your message and will get back to you soon.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p>Best regards,</p>
        <p>Fenil Vaghasiya</p>
      `,
    })

    if (ownerEmail.error || senderEmail.error) {
      console.error('Error sending emails:', ownerEmail.error || senderEmail.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
} 