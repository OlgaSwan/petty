'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Pet } from '@component/app/types/pet'
import Image from 'next/image'

type Field = 'happiness' | 'fullness' | 'thirst'

export default function Pet() {
  const [pet, setPet] = useState<Pet>()

  const reduceNeeds = useCallback(( field: Field ) => {

    setTimeout(() => {
      if (pet && pet.happiness > 0) {
        setPet(changeStat(pet, field))
        localStorage.setItem('pet', JSON.stringify(changeStat(pet, field)))
      }
    }, 1000)

  }, [pet])

  const changeStat = ( prev: Pet, field: Field ) => ( { ...prev, [field]: prev[field] - 1 } )

  useEffect(() => {
    const petStr = localStorage.getItem('pet')
    if (petStr) {
      setPet(JSON.parse(petStr))
    }
  }, [])

  useEffect(() => {
    reduceNeeds('happiness')
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


