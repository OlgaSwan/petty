import React from 'react'
import Image from 'next/image'

export default function InfoBtn() {
  return (
    <Image className='header--btn' src={'/buttons/info-btn.svg'} alt='Info' width={30} height={30}/>
  )
}

