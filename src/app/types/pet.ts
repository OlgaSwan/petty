export type Diet = 'Carnivore' | 'Herbivore'

export type Pet = {
  petId: string
  name: string
  diet: Diet
  fullness: number
  thirst: number
  happiness: number
  urine: number
}