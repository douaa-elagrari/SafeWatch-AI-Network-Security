import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SafeWatch v5.1 — Technical Architecture Report',
  description: 'A production-grade Chrome extension enforcing multi-layer content filtering across 9 major platforms.',
  icons: {
    // This tells the browser to use the file for various sizes
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    // This makes the icon look large and high-quality on iOS/Android home screens
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}