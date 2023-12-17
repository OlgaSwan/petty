'use client'

import { useStore } from '@nanostores/react'
import { notiStore } from './store'
import { useEffect } from 'react'

const removeAfter = 5000

export default function NotiTemp() {
  const currentNoti = useStore(notiStore.currentNotiStore)

  useEffect(() => {
    const id = setTimeout(() => {
      notiStore.removeFirst()
    }, removeAfter)

    return () => clearTimeout(id)
  }, [currentNoti])

  if (!currentNoti) return null

  return currentNoti.element
}
