import type { Metadata } from 'next'
import { Sriracha } from 'next/font/google'
import './globals.css'
import SessionWrapper from './components/SessionWrapper'

const sriracha = Sriracha({ 
  subsets: ['latin', 'thai'],
  variable: '--font-sriracha',
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Hollow Land - ดินแดนมหัศจรรย์แห่งการผจญภัย FiveM Roleplay',
  description: 'ยินดีต้อนรับสู่ Hollow Land ดินแดนมหัศจรรย์ที่เต็มไปด้วยเวทมนตร์และการผจญภัย สร้างตำนานของคุณเองในโลก FiveM Roleplay ที่งดงามและลึกลับ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className={`${sriracha.variable}`}>
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  )
} 