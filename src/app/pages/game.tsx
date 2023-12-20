'use client'

import React from 'react'
import Image from 'next/image'

import { petStore } from '@component/app/pet-store'

import Pet from '@component/app/(game-scope)/game/components/pet/pet'
import ConditionsList from '@component/app/(game-scope)/game/components/conditions-list'
import PlaceToWalkSelector from '../(game-scope)/game/components/place-to-walk-selector/place-to-walk-selector'
import InteractionsList from '@component/app/(game-scope)/game/components/interaction/interactions-list'

import { mealList } from '@component/app/shared-data/meals'
import { beverageList } from '@component/app/shared-data/beverages'
import { toyList } from '@component/app/shared-data/toys'

import styles from '../(game-scope)/game/game.module.scss'
import usePet from '../hooks/usePet'
import PetNotFound from '../components/petNotFound'

export default function Game() {
  const pet = usePet()

  if (!pet) return <PetNotFound />

  return (
    <div className={styles['game--container']}>
      <div className={styles['conditions-interactions--container']}>
        <ConditionsList />
        <div className={styles['interactions--container']}>
          <InteractionsList
            key='meals-list'
            title='Meals'
            array={mealList.filter((e) => e.diet === pet.diet)}
            onClick={petStore.eat}
            balance={pet.balance}
          />
          <InteractionsList
            key='beverages-list'
            title='Beverages'
            array={beverageList}
            onClick={petStore.drink}
            balance={pet.balance}
          />
          <InteractionsList
            key='toys-list'
            title='Toys'
            array={toyList}
            onClick={petStore.play}
            balance={pet.balance}
          />
        </div>
      </div>
      <Pet image={pet.image} name={pet.name} alt={pet.alt} />
      <div className={styles['places--container']}>
        <Image
          src='/game-asset/pet-home.svg'
          alt='Pet home'
          width={200}
          height={208}
          style={{ alignSelf: 'center' }}
        />
        {pet.urine > 50 && <PlaceToWalkSelector />}
      </div>
    </div>
  )
}
