import './globals.css'
import type { Metadata } from 'next'
import {Poppins} from 'next/font/google'
import Navbar from './Component/Nav/Navbar'
import Footer from './Component/Footer/Footer'

const Poppin = Poppins({ subsets: ['latin'], weight:['400','700'] })

export const metadata: Metadata = {
  title: 'Dsquare-Gadget',
  description: 'Ecommerce app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${Poppin.className}`}>
      <div className='flex flex-col min-h-screen'>
        
          <Navbar/>
          <main className='flex-grow'> {children} </main>
        <Footer/>
       
        </div>
      </body>
    </html>
  )
}
