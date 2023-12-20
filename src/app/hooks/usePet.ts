'use client'

import { useStore } from '@nanostores/react'
import { petStore } from '../pet-store'
import { useEffect } from 'react'

export default function usePet() {
  const pet = useStore(petStore.store)

  useEffect(() => {
    petStore.tryGetFromLocalStorage()
  }, [])

  return pet
}
