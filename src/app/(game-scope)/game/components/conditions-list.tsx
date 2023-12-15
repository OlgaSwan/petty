'use client'

import React from 'react'

import { petStore } from '@component/app/pet-store'
import { useStore } from '@nanostores/react'

import Bar from '@component/app/(game-scope)/game/components/bar'

import styles from '@component/app/(game-scope)/game/game.module.scss'

export default function ConditionsList() {
  const pet = useStore(petStore.store)
  return (
    <>
      {pet &&
          <div className={styles['conditions-list--container']}>
              <Bar title='Happiness' percent={pet.happiness}/>
              <Bar title='Fullness' percent={pet.fullness}/>
              <Bar title='Thirst' percent={pet.thirst}/>
              <Bar title='Urine' percent={pet.urine}/>
          </div>
      }
    </>
  )
}
