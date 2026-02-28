import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, details, budget } = body

    if (!name || !email || !details) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"GhostMade Labs Contact" <${process.env.SMTP_USER}>`,
      to: 'hello@ghostmadelabs.com',
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background: #0B0F14; color: #E8EDF3; padding: 32px; border-radius: 8px; max-width: 600px; border: 1px solid #1E2D3D;">
          <div style="margin-bottom: 24px;">
            <img src="https://ghostmadelabs.com/logo.png" alt="GhostMade Labs" width="40" style="display:inline-block; vertical-align:middle; margin-right:10px;" />
            <span style="font-size: 18px; font-weight: bold; color: #E8EDF3;">Ghost<span style="color:#00FF94;">Made</span> Labs</span>
          </div>
          <h2 style="color: #00FF94; font-size: 20px; margin-bottom: 24px;">// new_project_inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #1E2D3D;">
              <td style="padding: 12px 0; color: #6B7E96; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px;">Name</td>
              <td style="padding: 12px 0; color: #E8EDF3; font-size: 14px;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1E2D3D;">
              <td style="padding: 12px 0; color: #6B7E96; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 12px 0; color: #00FF94; font-size: 14px;"><a href="mailto:${email}" style="color: #00FF94;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #1E2D3D;">
              <td style="padding: 12px 0; color: #6B7E96; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Budget</td>
              <td style="padding: 12px 0; color: #E8EDF3; font-size: 14px;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #6B7E96; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Details</td>
              <td style="padding: 12px 0; color: #E8EDF3; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${details}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #1E2D3D; color: #6B7E96; font-size: 11px;">
            &lt;ghostmadelabs.com | hello@ghostmadelabs.com /&gt;
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[v0] Contact form error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
