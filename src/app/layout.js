'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { TextProvider } from "@/hooks/useText";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body className={inter.className} >
        {/*  */}
        <main className='flex flex-col flex-grow w-screen md:w-full  min-h-screen'>
          <TextProvider>
            <Body>
            <Header />
            <div className='pt-4 pl-2 pr-2 md:p-4 md:pl-[3.4rem] '>
              {children}
            </div>

            <Footer></Footer>
            </Body>
          </TextProvider>
        </main>


      </body>
    </html>
  )
}
