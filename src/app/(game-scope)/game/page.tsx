'use client'

import React from 'react'
import Image from 'next/image'

import { petStore } from '@component/app/pet-store'
import { useStore } from '@nanostores/react'

import Pet from '@component/app/(game-scope)/game/components/pet/pet'
import ConditionsList from '@component/app/(game-scope)/game/components/conditions-list'
import PlaceToWalkSelector from './components/place-to-walk-selector/place-to-walk-selector'
import InteractionsList from '@component/app/(game-scope)/game/components/interaction/interactions-list'

import { mealList } from '@component/app/shared-data/meals'
import { beverageList } from '@component/app/shared-data/beverages'
import { toyList } from '@component/app/shared-data/toys'

import styles from './game.module.scss'

export default function Game() {
  const pet = useStore(petStore.store)
  return (
    <>
      <div className={styles['game--container']}>
        {pet && (
          <div className={styles['interactions--container']}>
            <ConditionsList/>
            <InteractionsList
              key='meals-list'
              title='Meals'
              array={mealList.filter(( e ) => e.diet === pet.diet)}
              onClick={petStore.eat}
            />
            <InteractionsList
              key='beverages-list'
              title='Beverages'
              array={beverageList}
              onClick={petStore.drink}
            />
            <InteractionsList
              key='toys-list'
              title='Toys'
              array={toyList}
              onClick={petStore.play}
            />
          </div>
        )}
        <Pet/>
        {pet && (
          <div className={styles['places--container']}>
            <Image src='/pet-home.svg' alt='Pet home' width={200} height={208} style={{ alignSelf: 'center' }}/>
            {pet.urine > 50 && <PlaceToWalkSelector/>}
          </div>
        )}
      </div>
    </>
  )
}
