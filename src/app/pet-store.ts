'use client'

import { atom, action } from 'nanostores'
import { Pet } from '@component/app/types/pet'
import { notiStore } from './(game-scope)/game/components/noti/store'

export const KEY = 'pet'
export type Field = 'happiness' | 'fullness' | 'thirst'

const store = atom<Pet | undefined>(undefined)

store.listen((value) =>
  !value
    ? localStorage.removeItem('pet')
    : localStorage.setItem('pet', JSON.stringify(value))
)

export const petStore = {
  store,
  tryGetFromLocalStorage: action(store, 'tryGetFromLocalStorage', (store) => {
    try {
      const localPet = localStorage.getItem(KEY)
      if (localPet) store.set(JSON.parse(localPet) as Pet)
    } catch (error) {
      //ignored
    }
  }),
  createPet: action(store, 'createPet', (store, pet: Pet) => {
    store.set(pet)
  }),
  reduceNeeds: action(store, 'reduceNeeds', (store, field: Field) => {
    const pet = store.get()

    if (!pet) return

    if (pet[field] > 0) {
      const newValue = { ...pet, [field]: pet[field] - 1 }
      store.set(newValue)

      if (newValue[field] < 50) notiStore.add(field)
    } else {
      if (pet[field] < 50) notiStore.add(field)
    }
  }),
  eat: action(store, 'eat', (store, value: number, price: number) => {
    const pet = store.get()
    if (pet && pet.balance >= price) {
      const newValue = {
        ...pet,
        fullness: pet.fullness + value >= 100 ? 100 : pet.fullness + value,
        balance: pet.balance - price,
      }
      store.set(newValue)

      notiStore.add('yummy')
      notiStore.remove('fullness')
    }
  }),
  drink: action(store, 'drink', (store, value: number, price: number) => {
    const pet = store.get()
    if (pet && pet.balance >= price) {
      const newValue = {
        ...pet,
        thirst: pet.thirst + value >= 100 ? 100 : pet.thirst + value,
        urine: pet.urine + value >= 100 ? 100 : pet.urine + value,
        balance: pet.balance - price,
      }
      store.set(newValue)

      notiStore.add('yummy')
      notiStore.remove('thirst')

      if (newValue.urine > 50) notiStore.add('pee')
    }
  }),
  walk: action(store, 'walk', (store, value: number) => {
    const pet = store.get()
    if (pet) {
      const newUrineValue = Math.max(0, pet.urine - value)
      const newValue = {
        ...pet,
        urine: newUrineValue,
      }
      store.set(newValue)

      if (newUrineValue < 50) notiStore.remove('pee')
    }
  }),
  play: action(store, 'play', (store, value: number, price: number) => {
    const pet = store.get()
    if (pet && pet.balance >= price) {
      const newValue = {
        ...pet,
        happiness: pet.happiness + value >= 100 ? 100 : pet.happiness + value,
        balance: pet.balance - price,
      }
      store.set(newValue)

      notiStore.add('play')
      notiStore.remove('happiness')
    }
  }),
  earn: action(store, 'earn', (store, value: number) => {
    const pet = store.get()
    if (pet) {
      const newValue = {
        ...pet,
        balance: pet.balance + value,
      }
      store.set(newValue)
    }
  }),
}
