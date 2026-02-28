//app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, details, budget } = body as {
      name?: string
      email?: string
      details?: string
      budget?: string
    }

    if (!name || !email || !details) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    // Escape untrusted content before injecting into HTML emails
    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safeDetails = escapeHtml(String(details))
    const safeBudget = escapeHtml(budget ? String(budget) : "Not specified")

    const phoneDisplay = "+1 (601) 907-6169"
    const phoneE164 = "+16019076169"
    const whatsappLink = "https://wa.me/16019076169"

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 1) Send internal email to your team
    await transporter.sendMail({
      from: `"GhostMade Labs Contact" <${process.env.SMTP_USER}>`,
      to: "hello@ghostmadelabs.com",
      replyTo: safeEmail,
      subject: `New Project Inquiry from ${safeName}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; background:#0B0F14; color:#E8EDF3; padding:32px; border-radius:12px; max-width:640px; border:1px solid #1E2D3D;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px;">
            <img src="https://ghostmadelabs.com/logo.png" alt="GhostMade Labs" width="40" height="40" style="display:block;" />
            <div style="font-size:18px; font-weight:800; letter-spacing:0.3px;">
              Ghost<span style="color:#00FF94;">Made</span> Labs
            </div>
          </div>

          <div style="color:#00FF94; font-family:'Courier New', monospace; font-size:14px; margin-bottom:18px;">
            // new_project_inquiry
          </div>

          <table style="width:100%; border-collapse:collapse;">
            <tr style="border-bottom:1px solid #1E2D3D;">
              <td style="padding:12px 0; color:#6B7E96; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; width:140px;">Name</td>
              <td style="padding:12px 0; color:#E8EDF3; font-size:14px;">${safeName}</td>
            </tr>
            <tr style="border-bottom:1px solid #1E2D3D;">
              <td style="padding:12px 0; color:#6B7E96; font-size:12px; text-transform:uppercase; letter-spacing:0.1em;">Email</td>
              <td style="padding:12px 0; font-size:14px;">
                <a href="mailto:${safeEmail}" style="color:#00FF94; text-decoration:none;">${safeEmail}</a>
              </td>
            </tr>
            <tr style="border-bottom:1px solid #1E2D3D;">
              <td style="padding:12px 0; color:#6B7E96; font-size:12px; text-transform:uppercase; letter-spacing:0.1em;">Budget</td>
              <td style="padding:12px 0; color:#E8EDF3; font-size:14px;">${safeBudget}</td>
            </tr>
            <tr>
              <td style="padding:12px 0; color:#6B7E96; font-size:12px; text-transform:uppercase; letter-spacing:0.1em; vertical-align:top;">Details</td>
              <td style="padding:12px 0; color:#E8EDF3; font-size:14px; line-height:1.7; white-space:pre-wrap;">${safeDetails}</td>
            </tr>
          </table>

          <div style="margin-top:22px; padding-top:14px; border-top:1px solid #1E2D3D; color:#6B7E96; font-size:11px;">
            &lt;ghostmadelabs.com | hello@ghostmadelabs.com /&gt;
          </div>
        </div>
      `,
    })

    // 2) Auto-reply to the client
    await transporter.sendMail({
      from: `"GhostMade Labs" <${process.env.SMTP_USER}>`,
      to: safeEmail,
      replyTo: "hello@ghostmadelabs.com",
      subject: "We received your message — GhostMade Labs",
      text: `Hi ${name},

Thanks for reaching out to GhostMade Labs — we’ve received your message.

We’ll get back to you within 24 hours, and we always strive to respond as quickly as possible.

If you need urgent attention, contact us via:
Call/Text/WhatsApp: ${phoneDisplay}
WhatsApp: ${whatsappLink}

— GhostMade Labs
https://ghostmadelabs.com`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; background:#FFFaf0; color:#0f1720; padding:32px; border-radius:12px; max-width:640px; border:1px solid #e6dcc7;">
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px;">
            <img src="https://ghostmadelabs.com/logo.png" alt="GhostMade Labs" width="40" height="40" style="display:block;" />
            <div style="font-size:18px; font-weight:800; letter-spacing:0.3px;">
              Ghost<span style="color:#00FF94;">Made</span> Labs
            </div>
          </div>

          <h2 style="margin:0 0 10px; font-size:20px; line-height:1.25;">
            Thanks — we’ve received your message.
          </h2>

          <p style="margin:0 0 12px; font-size:14px; line-height:1.7; color:#334155;">
            Hi <strong>${safeName}</strong>,<br/>
            We’ve received your email and will reach out within <strong>24 hours</strong>.
            We strive to answer all clients in the shortest time possible.
          </p>

          <div style="margin:18px 0; padding:14px; border-radius:10px; background:#f5efdf; border:1px solid #e6dcc7;">
            <p style="margin:0 0 10px; font-size:14px; line-height:1.6; color:#0f1720;">
              Need urgent attention? Reach us via text, call, or WhatsApp:
            </p>

            <p style="margin:0; font-size:14px;">
              <strong>${phoneDisplay}</strong>
              &nbsp;•&nbsp;
              <a href="tel:${phoneE164}" style="color:#0f1720; text-decoration:underline;">Call</a>
              &nbsp;•&nbsp;
              <a href="${whatsappLink}" style="color:#0f1720; text-decoration:underline;">
                WhatsApp ${phoneDisplay}
              </a>
            </p>
          </div>

          <p style="margin:0 0 16px; font-size:13px; color:#475569; line-height:1.7;">
            For reference, here’s a copy of what you submitted:
          </p>

          <div style="padding:14px; border-radius:10px; background:#ffffff; border:1px solid #e6dcc7;">
            <div style="font-size:12px; color:#64748b; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px;">
              Budget
            </div>
            <div style="font-size:14px; margin-bottom:12px;">${safeBudget}</div>

            <div style="font-size:12px; color:#64748b; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:6px;">
              Details
            </div>
            <div style="font-size:14px; white-space:pre-wrap; line-height:1.7;">${safeDetails}</div>
          </div>

          <div style="margin-top:22px; padding-top:14px; border-top:1px solid #e6dcc7; font-size:12px; color:#64748b;">
            GhostMade Labs • <a href="https://ghostmadelabs.com" style="color:#0f1720; text-decoration:underline;">ghostmadelabs.com</a> •
            <a href="mailto:hello@ghostmadelabs.com" style="color:#0f1720; text-decoration:underline;">hello@ghostmadelabs.com</a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
