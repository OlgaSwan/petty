import React, { memo, useEffect, useState } from 'react'
import Image from 'next/image'

import styles from '@component/app/styles/home.module.scss'

interface AnimatedSwapProps {
  images: string[]
  alt?: string
  style?: string
  width?: number
  height?: number
}

function AnimatedSwap({
  images,
  alt,
  style,
  width = 70,
  height = 70,
}: AnimatedSwapProps) {
  console.log(123)
  const [currentImage, setCurrentImage] = useState(images[0])

  useEffect(() => {
    let timeoutID: NodeJS.Timeout

    const changeImage = () => {
      timeoutID = setTimeout(() => {
        setCurrentImage((prev) => {
          const index = images.indexOf(prev)
          const nextIndex = index + 1
          return nextIndex < images.length ? images[nextIndex] : images[0]
        })
        changeImage()
      }, 2000)
    }
    changeImage()

    return () => clearTimeout(timeoutID)
  }, [images])

  return (
    <Image
      className={styles[style ?? '']}
      src={currentImage}
      alt={alt ?? 'image'}
      width={width}
      height={height}
      priority
    />
  )
}

export default memo(AnimatedSwap)
