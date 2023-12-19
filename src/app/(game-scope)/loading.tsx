import React from 'react'
import Image from 'next/image'
import AnimatedDots from '@component/app/components/animations/animated-dots'

export default function Loading() {
  return (
    <div className='loading--container'>
      <Image src={'./loading.svg'} alt='Loading' width={100} height={20}/>
      <AnimatedDots/>
    </div>
  )
}