'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

import { useStore } from '@nanostores/react'
import { petStore } from '@component/app/pet-store'
import AnimatedBreathing from '@component/app/components/animated-breathing'

export default function Pet() {
  const pet = useStore(petStore.store)
  const petRef = useRef(null)

  useEffect(() => {
    petStore.tryGetFromLocalStorage()
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
      {pet ? (
        <div className='pet--container'>
          <h2>{pet.name}</h2>
          <div ref={petRef} style={{ margin: '0', padding: '0' }}>
            <AnimatedBreathing image={pet.image} alt={pet.alt} width={450} height={300}/>
          </div>
        </div>
      ) : (
        <div>
          <p>Sry but u don`t have a pet :(</p>
          <Link href='/'>Click here to create one</Link>
        </div>
      )}
    </>
  )
}
