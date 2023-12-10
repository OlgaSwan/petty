'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Field, petStore } from '@component/app/pet-store'
import { useStore } from '@nanostores/react'

export default function Noti() {
  const pet = useStore(petStore.store)
  const [visible, setVisible] = useState(false)
  const [need, setNeed] = useState<Field | null>(null)

  const isCalled = useRef(false)

  const handleNeed = useCallback(
    ( field: Field ) => {
      if (isCalled.current) return
      if (pet && pet[field] <= 20) {
        isCalled.current = true
        setNeed(field)
        setVisible(true)
        setTimeout(() => setVisible(false), 5000)
      }
    }, [pet])

  useEffect(() => {
    handleNeed('fullness')
    handleNeed('thirst')
    handleNeed('happiness')
  }, [handleNeed])

  return (
    <>
      {visible && need && <div>Noti</div>}
    </>
  )
}

