import { atom, onMount, action } from 'nanostores'
import { Pet } from '@component/app/types/pet'

const KEY = 'pet'
export type Field = 'happiness' | 'fullness' | 'thirst'

const store = atom<Pet | undefined>(undefined)

onMount(store, () => {
  const pet = localStorage.getItem(KEY)
  if (pet) store.set(JSON.parse(pet) as Pet)
})

export const petStore = {
  store,
  createPet: action(store, 'createPet', ( store, pet: Pet ) => {
    store.set(pet)
    localStorage.setItem('pet', JSON.stringify(pet))
  }),
  reduceNeeds: action(store, 'reduceNeeds', ( store, field: Field ) => {
    const pet = store.get()
    if (pet && pet[field] > 0) {
      const newValue = { ...pet, [field]: pet[field] - 1 }
      store.set(newValue)
      localStorage.setItem(KEY, JSON.stringify(newValue))
    }
  }),
}