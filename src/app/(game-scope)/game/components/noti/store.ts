'use client'

import { Field } from '@component/app/pet-store'
import { action, atom } from 'nanostores'
import { ReactNode } from 'react'

type TimestampObject<T> = {
  [key in T as `last_${string & key}`]: number
}

type NotiType = 'pee' | 'speak' | Field

type NotiObj = {
  type: NotiType
  element: ReactNode
}

const store = atom<NotiObj[]>([])

store.listen((value) => console.log(value, 'noti'))

const timestamps: Partial<TimestampObject<NotiType>> = {}
const addTimeout = 100000 //milliseconds

const getNotiElement = (type: NotiType): ReactNode => {
  switch (type) {
    case 'pee':
      return 'I want to pee'
    case 'speak':
      return 'I luv u'
    case 'happiness':
      return 'Pet me :('
    case 'fullness':
      return 'im hungry'
    case 'thirst':
      return 'give me water :('
  }
}

export const notiStore = {
  store,
  add: action(store, 'add', (store, type: NotiType) => {
    const notis = store.get()

    if (notis.find((item) => item.type === type)) return

    const timestamp = new Date().getTime()
    console.log((timestamps[`last_${type}`] ?? 0 + addTimeout) > timestamp)
    if ((timestamps[`last_${type}`] ?? 0 + addTimeout) > timestamp) return

    const element = getNotiElement(type)
    timestamps[`last_${type}`] = timestamp

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
