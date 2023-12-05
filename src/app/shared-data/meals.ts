import { Diet } from '@component/app/types/pet'

type Meal = {
  diet: Diet
  image: string
  value: number
}

export const mealList: readonly Meal[] = [
  {
    diet: 'Carnivore',
    image: '/meals/turkey-leg.svg',
    value: 50,
  },
  {
    diet: 'Carnivore',
    image: '/meals/fried-egg.svg',
    value: 20,
  },
  {
    diet: 'Carnivore',
    image: '/meals/sushi.svg',
    value: 30,
  },
  {
    diet: 'Herbivore',
    image: '/meals/watermelon.svg',
    value: 50,
  },
  {
    diet: 'Herbivore',
    image: '/meals/carrot.svg',
    value: 20,
  },
  {
    diet: 'Herbivore',
    image: '/meals/apple.svg',
    value: 30,
  },
]