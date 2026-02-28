"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER_E164 = "16019076169"
const WHATSAPP_DISPLAY = "+1 (601) 907-6169"

// Optional: preset message
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi GhostMade Labs — I need help with a project."
)

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${WHATSAPP_MESSAGE}`

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with GhostMade Labs on WhatsApp (${WHATSAPP_DISPLAY})`}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg glow-primary transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40"
    >
      <MessageCircle size={18} />
      <span className="font-mono text-xs hidden sm:inline">WhatsApp</span>
    </Link>
  )
}