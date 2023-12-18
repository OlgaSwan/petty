import React, { memo } from 'react'

import InteractionCard from '@component/app/(game-scope)/game/components/interaction/interaction-card'
import { Diet } from '@component/app/types/pet'

import styles from './/interactions.module.scss'

interface InteractionsListProps {
  title: string
  array: readonly {
    image: string
    alt: string
    value: number
    price: number
    diet?: Diet
  }[]
  onClick: (value: number, price: number) => void
  balance: number
}

function InteractionsList({
  title,
  array,
  onClick,
  balance,
}: InteractionsListProps) {
  return (
    <div className={styles['interactions--container']}>
      <h4>{title}</h4>
      <div className={styles['interactions--list']}>
        {array.map((e, index) => (
          <InteractionCard
            key={index}
            image={e.image}
            alt={e.alt}
            value={e.value}
            price={e.price}
            onClick={(value, price) => onClick(value, price)}
            disabled={e.price > balance}
          />
        ))}
      </div>
    </div>
  )
}

export default memo(InteractionsList)