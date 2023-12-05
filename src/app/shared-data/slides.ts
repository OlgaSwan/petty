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
    image: 'pets/cat_3colors.svg',
    alt: 'Three-colored cat',
    diet: 'Carnivore',
  },
  {
    id: '2',
    image: 'pets/cat_heterochromia.svg',
    alt: 'Heterochromia cat',
    diet: 'Carnivore',
  },
  {
    id: '3',
    image: 'pets/cat_red.svg',
    alt: 'Red cat',
    diet: 'Carnivore',
  },
  {
    id: '4',
    image: 'pets/cat_black.svg',
    alt: 'Black cat',
    diet: 'Carnivore',
  },
]