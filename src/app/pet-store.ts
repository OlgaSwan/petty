'use client'

import { atom, action } from 'nanostores'
import { Pet } from '@component/app/types/pet'

export const KEY = 'pet'
export type Field = 'happiness' | 'fullness' | 'thirst'

const store = atom<Pet | undefined>(undefined)

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
    localStorage.setItem('pet', JSON.stringify(pet))
  }),
  reduceNeeds: action(store, 'reduceNeeds', (store, field: Field) => {
    const pet = store.get()
    if (pet && pet[field] > 0) {
      const newValue = { ...pet, [field]: pet[field] - 1 }
      store.set(newValue)
      localStorage.setItem(KEY, JSON.stringify(newValue))
    }
  }),
}
