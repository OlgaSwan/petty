'use client'

import React, { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { petStore } from '@component/app/pet-store'

import Pet from '@component/app/(game-scope)/game/components/pet/pet'
import Bar from '@component/app/(game-scope)/game/components/bar'
import usePet from '../hooks/usePet'
import PetNotFound from '../components/pet-not-found'

import styles from '@component/app/(game-scope)/walk/walk.module.scss'

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
    if (pet && pet.urine === 0) {
      router.push('/game')
    }
  }, [router, pet])

  if (!pet) return <PetNotFound/>

  return (
    <div
      className={styles['walk--container']}
      style={{ backgroundImage: `url('${place}')` }}
    >
      <Bar title='Walking around' percent={pet.urine}/>
      <Pet image={pet.image} name={pet.name} alt={pet.alt}/>
    </div>
  )
}

export default Walk
