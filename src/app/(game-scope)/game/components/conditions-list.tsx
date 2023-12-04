'use client'

import React from 'react'

import { petStore } from '@component/app/pet-store'
import { useStore } from '@nanostores/react'

import Bar from '@component/app/(game-scope)/game/components/bar'

export default function ConditionsList() {
  const pet = useStore(petStore.store)
  return (
    <>
      {pet &&
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Bar title='Happiness' percent={pet.happiness}/>
              <Bar title='Fullness' percent={pet.fullness}/>
              <Bar title='Thirst' percent={pet.thirst}/>
          </div>
      }
    </>
  )
}
