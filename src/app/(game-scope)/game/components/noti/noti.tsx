'use client'

import { RefObject, useEffect, useState } from 'react'
import { useStore } from '@nanostores/react'

import { notiStore } from './store'

const removeAfter = 5000

export default function Noti( {
  target,
}: {
  target: RefObject<HTMLDivElement>
} ) {
  const currentNoti = useStore(notiStore.currentNotiStore)
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  })

  useEffect(() => {
    if (target.current) {
      const targetRect = target.current.getBoundingClientRect()

      const top = targetRect.top - 130
      const left = targetRect.left + ( targetRect.width * 2 ) / 3

      console.log(top, left)
      setPosition({ top, left })
    }
  }, [target])

  useEffect(() => {
    const id = setTimeout(() => {
      notiStore.removeFirst()
    }, removeAfter)

    return () => clearTimeout(id)
  }, [currentNoti])

  if (!currentNoti) return null

  return (
    <div
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {currentNoti.element}
    </div>
  )
}
