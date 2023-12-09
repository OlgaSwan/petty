'use client'

import React, { useState } from 'react'
import Image from 'next/image'

function VolumeBtn() {
  const [volume, setVolume] = useState(true)
  return (
    <Image className='volume--btn' src={volume ? '/buttons/volume-off.svg' : '/buttons/volume-on.svg'} alt='Volume on'
           width={30} height={30}
           onClick={() => setVolume(!volume)}/>
  )
}

export default VolumeBtn
