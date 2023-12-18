'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

import { Field } from '@component/app/pet-store'
import { action, atom, computed } from 'nanostores'

type NotiType = 'yummy' | 'pee' | 'speak' | Field

type TimestampObject = {
  [key in NotiType]: number
}

type NotiObj = {
  type: NotiType
  element: ReactNode
}

const store = atom<NotiObj[]>([])
const currentNotiStore = computed(store, (value) => value.at(0))

const timestamps: Partial<TimestampObject> = {}
const addTimeout = 20000 //milliseconds

const getNotiElement = (type: NotiType): ReactNode => {
  let src = ''

  switch (type) {
    case 'pee': {
      src = 'noti/noti-pee.svg'
      break
    }
    case 'speak': {
      src = 'noti/noti-luv.svg'
      break
    }
    case 'happiness': {
      src = 'noti/noti-miss.svg'
      break
    }
    case 'fullness': {
      src = 'noti/noti-hungry.svg'
      break
    }
    case 'thirst': {
      src = 'noti/noti-thirsty.svg'
      break
    }
  }

  return <Image src={src} alt='Notification' width={178} height={100} />
}

export const notiStore = {
  currentNotiStore,
  store,
  add: action(store, 'add', (store, type: NotiType) => {
    const notis = store.get()
    if (notis.find((item) => item.type === type)) return

    const timestamp = new Date().getTime()
    const prevTimestamp = timestamps[type] ?? 0
    if (timestamp - prevTimestamp < addTimeout) return

    const element = getNotiElement(type)
    timestamps[type] = timestamp

    store.set([...notis, { type: type, element: element }])
  }),
  remove: action(store, 'remove', (store, type: NotiType) => {
    const notis = store.get()

    if (notis.find((item) => item.type === type)) {
      const filtered = notis.filter((item) => item.type !== type)

      store.set([...filtered])
    }
  }),
  removeFirst: action(store, 'removeFirst', (store) => {
    store.set(store.get().slice(1))
  }),
}
