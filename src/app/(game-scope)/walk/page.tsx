'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useStore } from '@nanostores/react'
import { petStore } from '@component/app/pet-store'

import Bar from '../game/components/bar'
import Pet from '../game/components/pet'

function Walk() {
  const pet = useStore(petStore.store)
  const router = useRouter()

  useEffect(() => {
    let id: NodeJS.Timeout

    function spreadUrine() {
      id = setTimeout(() => {
        petStore.walk(5)
        spreadUrine()
      }, 1000)
    }

    spreadUrine()

    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    if (pet?.urine === 0) {
      router.push('/game')
    }
  }, [router, pet?.urine])

  return (
    <div
      style={{
        width: '960px',
        height: '800px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("walk_backgrounds/flower_field.png")',
      }}
    >
      {pet && <Bar title='Spreading urine' percent={pet.urine}/>}
      <Pet/>
    </div>
  )
}

export default Walk
