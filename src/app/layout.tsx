import './globals.scss'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import AppLayout from '@/components/AppLayout'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}
