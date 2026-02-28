import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GhostMade Labs | SaaS & Digital Engineering Studio',
  description: 'GhostMade Labs builds scalable SaaS platforms, modern web applications, and cloud-native systems engineered for growth.',
  keywords: ['SaaS development', 'web applications', 'cloud architecture', 'API engineering', 'DevOps', 'digital engineering studio'],
  authors: [{ name: 'GhostMade Labs' }],
  openGraph: {
    title: 'GhostMade Labs | SaaS & Digital Engineering Studio',
    description: 'GhostMade Labs builds scalable SaaS platforms, modern web applications, and cloud-native systems engineered for growth.',
    url: 'https://ghostmadelabs.com',
    siteName: 'GhostMade Labs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GhostMade Labs | SaaS & Digital Engineering Studio',
    description: 'GhostMade Labs builds scalable SaaS platforms, modern web applications, and cloud-native systems engineered for growth.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fbf6ea',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
