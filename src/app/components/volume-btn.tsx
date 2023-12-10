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
    const savedVolume = localStorage.getItem('petty-volume')
    if (savedVolume) {
      setVolume(JSON.parse(savedVolume))
    }
  }, [])

  return (
    <Image className='volume--btn' src={volume ? '/buttons/volume-off.svg' : '/buttons/volume-on.svg'} alt='Volume on'
           width={30} height={30} onClick={saveVolumeLocally}/>
  )
}

export default VolumeBtn
