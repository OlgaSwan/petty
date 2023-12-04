'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useStore } from '@nanostores/react'

import { KEY, petStore } from '@component/app/pet-store'
import { Pet } from '@component/app/types/pet'

export default function Pet() {
  const pet = useStore(petStore.store)

  useEffect(() => {
    const localPet = localStorage.getItem(KEY)
    if (localPet) petStore.createPet(JSON.parse(localPet) as Pet)
  }, [])

  useEffect(() => {
    let id: NodeJS.Timeout
    const reduceNeeds = () => {
      id = setTimeout(() => {
        petStore.reduceNeeds('happiness')
        petStore.reduceNeeds('fullness')
        petStore.reduceNeeds('thirst')
        reduceNeeds()
      }, 10000)
    }
    reduceNeeds()
    return () => clearTimeout(id)
  }, [])

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


