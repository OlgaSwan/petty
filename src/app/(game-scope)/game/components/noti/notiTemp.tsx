'use client'

import { useStore } from '@nanostores/react'
import { notiStore } from './store'
import { RefObject, useEffect, useState } from 'react'

const removeAfter = 5000

export default function NotiTemp({
  target,
}: {
  target: RefObject<HTMLDivElement>
}) {
  const currentNoti = useStore(notiStore.currentNotiStore)

  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  })

  useEffect(() => {
    if (target?.current) {
      const rect = target.current.getBoundingClientRect()

      // Calculate position relative to the parent
      const top = rect.top + rect.height
      const left = rect.left + rect.width

      // Set the position of the child component
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
        backgroundColor: 'lightblue',
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {currentNoti.element}
    </div>
  )
}
