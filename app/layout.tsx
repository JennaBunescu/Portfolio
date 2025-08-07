import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Jenna's Portfolio",
  description: 'Software Engineering Student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
