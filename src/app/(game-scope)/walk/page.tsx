'use client'

import React, { useEffect } from 'react'
import Bar from '../game/components/bar'
import { useStore } from '@nanostores/react'
import { petStore } from '@component/app/pet-store'
import { useRouter } from 'next/navigation'
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
      {pet && <Bar title='Spreading urine' percent={pet.urine} />}
      <Pet />
    </div>
  )
}

export default Walk
