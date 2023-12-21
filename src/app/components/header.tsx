'use client'

import React, { memo, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import VolumeBtn from '@component/app/components/volume-btn'
import InfoBtn from '@component/app/components/info-btn'
import Balance from '@component/app/components/balance'

function Header() {
  const [colored, setColored] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop
      setColored(scrollPosition > 60)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <header className={colored ? 'header--colored' : ''}>
      <div className='logo--container'>
        <Image src={'/game-asset/heart.svg'} alt='Logo' width={30} height={30}/>
        <Link href='/'>Petty</Link>
        <VolumeBtn/>
        <InfoBtn/>
      </div>
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
  )
}

export default memo(Header)

