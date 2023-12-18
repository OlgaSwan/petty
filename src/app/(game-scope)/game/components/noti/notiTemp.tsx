'use client'

import { useStore } from '@nanostores/react'
import { notiStore } from './store'
import { RefObject, useEffect, useState } from 'react'

const removeAfter = 5000

export default function NotiTemp( {
  target,
}: {
  target: RefObject<HTMLDivElement>
} ) {
  const currentNoti = useStore(notiStore.currentNotiStore)

  const [position, setPosition] = useState<{ top: number; right: number }>({
    top: 0,
    right: 0,
  })

  useEffect(() => {
    if (target.current) {
      const rect = target.current.getBoundingClientRect()

      const top = rect.top
      const right = rect.right
      console.log(top, right)
      setPosition({ top, right })
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
        bottom: `${position.top}px`,
        left: `${position.right}px`,
      }}
    >
      {currentNoti.element}
    </div>
  )
}
