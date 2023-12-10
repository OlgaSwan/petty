'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

import { petStore } from '@component/app/pet-store'
import { useStore } from '@nanostores/react'

export default function Noti() {
  const pet = useStore(petStore.store)
  const [visible, setVisible] = useState(false)

  const isCalled = useRef(false)

  const handleFullness = useCallback(
    () => {
      if (isCalled.current) return
      if (pet && pet.fullness <= 20) {
        isCalled.current = true
        setVisible(true)
        setTimeout(() => setVisible(false), 5000)
      }
    }, [pet])

  useEffect(() => {
    handleFullness()
  }, [handleFullness])

  return (
    <>
      {visible && <div>Noti</div>}
    </>

  )
}

