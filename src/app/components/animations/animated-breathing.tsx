import React, { useRef } from 'react'
import Image from 'next/image'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import styles from '@component/app/styles/home.module.scss'

interface AnimatedBreathingProps {
  image: string
  alt?: string
  style?: string
  width?: number
  height?: number
}

export default function AnimatedBreathing({
  image,
  alt,
  style,
  width = 70,
  height = 70,
}: AnimatedBreathingProps) {
  const petRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    gsap
      .timeline({ repeat: -1 })
      .from(petRef.current, {
        scale: 1.01,
        duration: 4,
        ease: 'expoScale',
      })
      .to(petRef.current, {
        scale: 1,
        duration: 2,
        ease: 'power1.out',
      })
  })

  return (
    <Image
      ref={petRef}
      className={styles[style ?? '']}
      src={image}
      alt={alt ?? 'image'}
      width={width}
      height={height}
      priority
    />
  )
}
