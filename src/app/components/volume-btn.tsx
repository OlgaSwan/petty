'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function VolumeBtn() {
  const [volume, setVolume] = useState(false)

  const saveVolumeLocally = () => {
    setVolume(!volume)
    localStorage.setItem('petty-volume', JSON.stringify(!volume))
  }

  useEffect(() => {
    let savedVolume = localStorage.getItem('petty-volume')
    if (savedVolume === null) {
      savedVolume = 'false'
    }
    setVolume(JSON.parse(savedVolume))
  }, [])

  return (
    <Image className='header--btn' src={volume ? '/buttons/volume-off.svg' : '/buttons/volume-on.svg'} alt='Volume'
           width={30} height={30} onClick={() => saveVolumeLocally()}/>
  )
}

export default VolumeBtn
