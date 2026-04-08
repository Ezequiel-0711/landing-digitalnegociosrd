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
    title: 'Digital Negocios RD | Automatiza Pedidos por WhatsApp 24/7',
    description: 'Bot de WhatsApp para automatizar pedidos de tu restaurante o negocio de comida en República Dominicana. RD$800/mes.',
    type: 'website',
    images: [
      {
        url: '/digitalnegociosrd_logo-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Digital Negocios RD Logo',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
      },
    ],
    apple: '/apple-touch-icon.png',
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