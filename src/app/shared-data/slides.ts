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
    image: '/cat_3colors.svg',
    alt: 'Three-colored cat',
    diet: 'Carnivore',
  },
  {
    id: '2',
    image: 'cat_heterochromia.svg',
    alt: 'Heterochromia cat',
    diet: 'Carnivore',
  },
  {
    id: '3',
    image: 'cat_red.svg',
    alt: 'Red cat',
    diet: 'Carnivore',
  },
  {
    id: '4',
    image: 'cat_black.svg',
    alt: 'Black cat',
    diet: 'Carnivore',
  },
]