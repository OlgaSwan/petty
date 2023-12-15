import React, { useRef } from 'react'
import Image from 'next/image'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import styles from '@component/app/styles/home.module.scss'

interface AnimatedHeartBeatingProps {
  image: string
  alt?: string
  style?: string
  width?: number
  height?: number
}

export default function AnimatedHeartBeating( {
  image,
  alt,
  style,
  width = 70,
  height = 70,
}: AnimatedHeartBeatingProps ) {
  const heartRef = useRef<HTMLImageElement | null>(null)

  useGSAP(() => {
    const changeImage = () => {
      if (!heartRef.current) return
      gsap.from(heartRef.current, {
        scale: 1.1,
        duration: 0.8,
        ease: 'elastic.out',
      })
    }

    const intervalID = setInterval(changeImage, 2000)
    return () => clearInterval(intervalID)

  }, [])

  return (
    <Image ref={heartRef} className={styles[style ?? '']} src={image} alt={alt ?? 'image'} width={width}
           height={height} priority/>
  )
}