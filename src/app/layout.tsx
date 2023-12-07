import React from 'react'
import type { Metadata } from 'next'
import { Pixelify_Sans } from 'next/font/google'

import { metaTitle } from '@component/app/shared-data/shared-data'

import './styles/globals.css'
import Link from 'next/link'
import Balance from '@component/app/components/balance'

const pixelify = Pixelify_Sans({ weight: ['400', '600'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: metaTitle,
  description: 'Simple tamagotchi-like game. Choose your pet!',
}

export default function RootLayout( {
  children,
}: {
  children: React.ReactNode
} ) {
  return (
    <html lang='en'>
    <body className={pixelify.className}>
    <div className='body--container'>
      <header>
        <Link href='/'>Petty</Link>
        <nav className='header--nav'>
          <ul>
            <li>
              <Link href='/game'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <Balance/>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>Olga Swan &copy; 2023</footer>
    </div>
    </body>
    </html>
  )
}
