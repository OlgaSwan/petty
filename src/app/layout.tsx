import React from 'react'
import type { Metadata } from 'next'
import { Pixelify_Sans } from 'next/font/google'

import { metaTitle } from '@component/app/shared-data'
import styles from './page.module.css'
import './globals.css'

const pixelify = Pixelify_Sans({ subsets: ['latin'], weight: ['400', '600'] })

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
        Petty
        <nav className='header--nav'>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer>Olga Swan &copy; 2023</footer>
    </div>
    </body>
    </html>
  )
}
