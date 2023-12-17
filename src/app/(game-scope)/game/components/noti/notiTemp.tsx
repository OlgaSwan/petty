'use client'

import { useStore } from '@nanostores/react'
import { notiStore } from './store'
import { useEffect, useState } from 'react'

const removeAfter = 1000

export default function NotiTemp() {
  const notis = useStore(notiStore.store)

  const [currentNoti, setCurrentNoti] = useState(notis.at(0))

  useEffect(() => {
    setCurrentNoti(notis.at(0))
  }, [notis])

  useEffect(() => {
    const id = setTimeout(() => {
      notiStore.removeFirst()
    }, removeAfter)

    return () => clearTimeout(id)
  }, [currentNoti])

  if (!currentNoti) return null

  return currentNoti.element
}
