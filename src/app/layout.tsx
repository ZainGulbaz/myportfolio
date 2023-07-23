import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zain Gulbaz',
  description: 'An Amazing Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
      <body className={inter.className+"h-screen"}>
      <main className='md:grid  md:grid-cols-3 md:gap-4'>
      
      <Sidebar/>

      <div className='md:col-span-2'>
      {children}
      <Toaster/>
      </div>
        
        </main>
        </body>
     
     
    </html>
  )
}
