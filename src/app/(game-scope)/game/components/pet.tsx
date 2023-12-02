'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Pet } from '@component/app/types/pet'
import Image from 'next/image'

export default function Pet() {
  const [pet, setPet] = useState<Pet>()

  const reduceNeeds = useCallback(() => {

    setTimeout(() => {
      if (pet && pet.happiness > 0) {
        setPet(changeStat(pet))
        localStorage.setItem('pet', JSON.stringify(changeStat(pet)))
      }
    }, 100)

  }, [pet])

  const changeStat = ( prev: Pet ) => {
    return { ...prev, happiness: prev.happiness - 1 }
  }

  useEffect(() => {
    const petStr = localStorage.getItem('pet')
    if (petStr) {
      setPet(JSON.parse(petStr))
    }
  }, [])

  useEffect(() => {
    reduceNeeds()
  }, [reduceNeeds])

  return (
    <>
      {pet &&
          <div className='pet--container'>
              <h2>{pet.name}</h2>
              <Image src={pet.image} alt={pet.alt} width={450} height={300} priority/>
              <div>
                  <h3>{pet.happiness}</h3>
                  <h3>{pet.fullness}</h3>
                  <h3>{pet.thirst}</h3>
              </div>
          </div>
      }
    </>
  )
}


