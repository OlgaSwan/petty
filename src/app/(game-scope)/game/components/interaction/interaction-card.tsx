import React from 'react'
import Image from 'next/image'

import styles from './/interactions.module.scss'

interface InteractionCardProps {
  image: string
  alt: string
  value: number
  onClick: ( value: number ) => void
}

export default function InteractionCard( { image, alt, value, onClick }: InteractionCardProps ) {
  return (
    <div className={styles['interaction']}>
      <h5>{alt}</h5>
      <Image src={image} alt={alt} width={80} height={80}
             onClick={() => onClick(value)}/>
    </div>
  )
}
