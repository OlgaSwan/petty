export type Diet = 'Carnivore' | 'Herbivore'

export type Pet = {
  image: string
  alt: string
  name: string
  diet: Diet
  fullness: number
  thirst: number
  happiness: number
  urine: number
}