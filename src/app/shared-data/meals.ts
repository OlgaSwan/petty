import { Diet } from '@component/app/types/pet'

type Meal = {
  diet: Diet
  image: string
  alt: string
  value: number
  price: number
}

export const mealList: Meal[] = [
  {
    diet: 'Carnivore',
    image: '/meals/fried-egg.svg',
    alt: 'fried egg',
    value: 20,
    price: 10,
  },
  {
    diet: 'Carnivore',
    image: '/meals/sushi.svg',
    alt: 'sushi',
    value: 30,
    price: 20,
  },
  {
    diet: 'Carnivore',
    image: '/meals/turkey-leg.svg',
    alt: 'turkey leg',
    value: 50,
    price: 30,
  },
  {
    diet: 'Herbivore',
    image: '/meals/carrot.svg',
    alt: 'carrot',
    value: 20,
    price: 10,
  },
  {
    diet: 'Herbivore',
    image: '/meals/apple.svg',
    alt: 'apple',
    value: 30,
    price: 20,
  },
  {
    diet: 'Herbivore',
    image: '/meals/watermelon.svg',
    alt: 'watermelon',
    value: 50,
    price: 30,
  },
]