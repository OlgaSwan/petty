import { Diet } from '@component/app/types/pet'

export type Slide = {
  id: string
  image: string
  alt: string
  diet: Diet
}

export const slides: Slide[] = [
  {
    id: '1',
    image: 'pets/fox.svg',
    alt: 'Fox',
    diet: 'Carnivore',
  },
  {
    id: '2',
    image: 'pets/dog.svg',
    alt: 'Dog',
    diet: 'Carnivore',
  },
  {
    id: '3',
    image: 'pets/sand_cat.svg',
    alt: 'Sand cat',
    diet: 'Carnivore',
  },
  {
    id: '4',
    image: 'pets/koala.svg',
    alt: 'Koala',
    diet: 'Herbivore',
  },
  {
    id: '5',
    image: 'pets/rabbit.svg',
    alt: 'Rabbit',
    diet: 'Herbivore',
  },
  {
    id: '6',
    image: 'pets/otter.svg',
    alt: 'Otter',
    diet: 'Carnivore',
  },
  {
    id: '7',
    image: 'pets/bat.svg',
    alt: 'Bat',
    diet: 'Carnivore',
  },
  {
    id: '8',
    image: 'pets/toucan.svg',
    alt: 'Toucan',
    diet: 'Herbivore',
  },
  {
    id: '0',
    image: 'pets/hamster.svg',
    alt: 'Hamster',
    diet: 'Herbivore',
  },
  {
    id: '10',
    image: 'pets/capybara.svg',
    alt: 'Capybara',
    diet: 'Herbivore',
  },
]