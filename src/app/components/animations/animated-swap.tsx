import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import styles from '@component/app/styles/home.module.scss'

interface AnimatedSwapProps {
  images: string[]
  alt?: string
  style?: string
  width?: number
  height?: number
}

export default function AnimatedSwap( { images, alt, style, width = 70, height = 70 }: AnimatedSwapProps ) {
  const pooRef = useRef<HTMLImageElement>(null)
  const intervalID = useRef<NodeJS.Timeout | null>(null)

  useGSAP(() => {
    let currentIndex = 0

    const changeImage = () => {
      if (!pooRef.current) return
      gsap.to(pooRef.current, {
        onComplete: () => {
          currentIndex = ( currentIndex + 1 ) % images.length
          if (pooRef.current) {
            pooRef.current.src = images[currentIndex]
          }
        },
        duration: 0.2,
      })
    }

    intervalID.current = setInterval(changeImage, 2000)
    return () => {
      if (intervalID.current) clearInterval(intervalID.current)
    }

  }, [images])

  return (
    <Image ref={pooRef} className={styles[style ?? '']} src={images[0]} alt={alt ?? 'image'} width={width}
           height={height}
           priority/>
  )
}




