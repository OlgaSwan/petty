'use client'

import React from 'react'

import Pet from '@component/app/(game-scope)/game/components/pet'
import ConditionsList from '@component/app/(game-scope)/game/components/conditions-list'
import InteractionsList from '@component/app/(game-scope)/game/components/interactions-list'
import { mealList } from '@component/app/shared-data/meals'
import { petStore } from '@component/app/pet-store'
import { useStore } from '@nanostores/react'
import { beverageList } from '@component/app/shared-data/beverages'
import { toyList } from '@component/app/shared-data/toys'

export default function Game() {
  const pet = useStore(petStore.store)
  return (
    <div>Game {pet &&
        <>
            <Pet/> <ConditionsList/>
            <InteractionsList key='meals-list' diet={pet.diet} array={mealList} onClick={petStore.eat}/>
            <InteractionsList key='beverages-list' array={beverageList} onClick={petStore.drink}/>
            <InteractionsList key='toys-list' array={toyList} onClick={petStore.play}/>
        </>
    } </div>
  )
}


