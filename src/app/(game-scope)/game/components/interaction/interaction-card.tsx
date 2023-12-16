import React from 'react'
import Image from 'next/image'

import styles from './/interactions.module.scss'

interface InteractionCardProps {
  image: string
  alt: string
  value: number
  price: number
  onClick: ( value: number, price: number ) => void
  disabled?: boolean
}

export default function InteractionCard( {
  image,
  alt,
  value,
  price,
  onClick,
  disabled = false,
}: InteractionCardProps ) {

  return (
    <button
      className={styles['interaction']}
      onClick={() => onClick(value, price)}
      disabled={disabled}
    >
      <div className={styles['interaction--meta']}>
        <h5>{alt}</h5>
        {price === 0 ? (
          <p>free</p>
        ) : (
          <div className={styles['interaction--price']}>
            <Image src={'/game-asset/coin.svg'} alt='Coin' width={20} height={20}/>
            <p>{price}</p>
          </div>
        )}
      </div>
      <Image src={image} alt={alt} width={36} height={36}/>
    </button>
  )
}
