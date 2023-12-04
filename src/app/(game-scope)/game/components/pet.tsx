'use client'

import React, { useCallback, useEffect } from 'react'
import Image from 'next/image'
import { useStore } from '@nanostores/react'

import { Field, petStore } from '@component/app/pet-store'

export default function Pet() {
  const pet = useStore(petStore.store)

  const reduceNeeds = useCallback(( field: Field ) => {

    return new Promise<void>(( resolve ) => {
      setTimeout(() => {
        petStore.reduceNeeds(field)
        resolve()
      }, 1000)
    })
  }, [])

  useEffect(() => {
    const reduceAllNeeds = async () => {
      await Promise.all([
        reduceNeeds('happiness'),
        reduceNeeds('fullness'),
        reduceNeeds('thirst'),
      ])
    }

    reduceAllNeeds().then()
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


