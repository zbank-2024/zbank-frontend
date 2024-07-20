import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zoonk',
  description: 'The bank for your crystal future',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex justify-center items-center h-full w-full'>
          <div className='h-full w-full max-h-8xl max-w-8xl'>{children}</div>
        </div>
      </body>
    </html>
  )
}
