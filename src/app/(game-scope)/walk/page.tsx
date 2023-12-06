'use client'

import React, { useEffect } from 'react'
import Bar from '../game/components/bar'
import { useStore } from '@nanostores/react'
import { petStore } from '@component/app/pet-store'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function Walk() {
  const pet = useStore(petStore.store)
  const router = useRouter()

  useEffect(() => {
    petStore.tryGetFromLocalStorage()
  }, [])

  useEffect(() => {
    let id: NodeJS.Timeout

    function spreadUrine() {
      id = setTimeout(() => {
        petStore.walk(5)
        spreadUrine()
      }, 500)
    }

    spreadUrine()

    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (pet?.urine === 0) {
      router.push('/game')
    }
  }, [router, pet?.urine])

  if (!pet)
    return (
      <div>
        <p>Sry but u don`t have a pet :(</p>
        <Link href='/'>Click here to create one</Link>
      </div>
    )

  //TODO: Move image of a pet to component?

  return (
    <div
      style={{
        width: '1000px',
        height: '800px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("walk_backgrounds/flower_field.svg")',
      }}
    >
      <Bar title='Spreading urine' percent={pet?.urine} />
      <Image src={pet.image} alt={pet.alt} width={450} height={300} priority />
    </div>
  )
}

export default Walk
