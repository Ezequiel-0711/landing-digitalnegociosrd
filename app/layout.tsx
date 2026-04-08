import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Digital Negocios RD | Automatiza Pedidos por WhatsApp',
  description: 'Bot de WhatsApp para automatizar pedidos de tu restaurante o negocio de comida en República Dominicana. Atiende clientes 24/7 sin esfuerzo.',
  keywords: ['WhatsApp', 'bot', 'pedidos', 'restaurante', 'delivery', 'República Dominicana', 'automatización'],
  openGraph: {
    title: 'Digital Negocios RD | Automatiza Pedidos por WhatsApp',
    description: 'Bot de WhatsApp para automatizar pedidos de tu restaurante o negocio de comida en República Dominicana.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
