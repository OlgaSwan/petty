'use client'

import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { petStore } from '@component/app/pet-store'

import Pet from '@component/app/(game-scope)/game/components/pet/pet'
import Bar from '@component/app/(game-scope)/game/components/bar'

import styles from '@component/app/(game-scope)/walk/walk.module.scss'
import usePet from '../hooks/usePet'

function Walk() {
  const pet = usePet()
  const router = useRouter()
  const searchParams = useSearchParams()

  const place = searchParams.get('place')

  useEffect(() => {
    let id: NodeJS.Timeout

    function spreadUrine() {
      id = setTimeout(() => {
        petStore.walk(5)
        petStore.earn(5)
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

  if (!pet) return null

  return (
    <div className={styles['walk--container']}
         style={{ backgroundImage: `url('${place}')` }}
    >
      <Bar title='Walking around' percent={pet.urine}/>
      <Pet image={pet.image} name={pet.name} alt={pet.alt}/>
    </div>
  )
}

export default Walk