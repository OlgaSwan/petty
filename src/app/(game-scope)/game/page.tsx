'use client'

import React from 'react'

import Pet from '@component/app/(game-scope)/game/components/pet'
import ConditionsList from '@component/app/(game-scope)/game/components/conditions-list'
import InteractionsList from '@component/app/(game-scope)/game/components/interaction/interactions-list'

import { petStore } from '@component/app/pet-store'
import { useStore } from '@nanostores/react'

import { mealList } from '@component/app/shared-data/meals'
import { beverageList } from '@component/app/shared-data/beverages'
import { toyList } from '@component/app/shared-data/toys'

export default function Game() {
  const pet = useStore(petStore.store)
  return (
    <>
      Game {pet &&
        <div>
            <Pet/> <ConditionsList/>
            <InteractionsList key='meals-list' title='Meals' array={mealList.filter(e => e.diet === pet.diet)}
                              onClick={petStore.eat}/>
            <InteractionsList key='beverages-list' title='Beverages' array={beverageList} onClick={petStore.drink}/>
            <InteractionsList key='toys-list' title='Toys' array={toyList} onClick={petStore.play}/>
        </div>
    }
    </>
  )
}


