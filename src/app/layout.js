import Navbar from '../../components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Victor Koome',
  description: 'Generated by create next app',
  icons: {
    icon: ['/assets/favicon.ico?v=4'],
    apple: ['/assets/apple-touch-icon.png?v=4'],
    shortcut: ['/assets/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
