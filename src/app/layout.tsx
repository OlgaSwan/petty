import React from 'react'
import type { Metadata } from 'next'
import { Pixelify_Sans } from 'next/font/google'

import { metaTitle } from '@component/app/shared-data/shared-data'

import './styles/globals.css'
import Header from '@component/app/components/header'

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
    <head>
      <title>{metaTitle}</title>
      <link rel='icon' type='image/svg+xml' href='/game-asset/heart.svg'/>
    </head>
    <body className={pixelify.className}>
    <div className='body--container'>
      <Header/>
      <main>{children}</main>
      <footer>Olga Swan &copy; 2023</footer>
    </div>
    </body>
    </html>
  )
}

