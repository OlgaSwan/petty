type Beverage = {
  image: string
  alt: string
  value: number
  price: number
}

export const beverageList: Beverage[] = [
  {
    image: '/beverages/beverage_3.svg',
    alt: 'water',
    value: 20,
    price: 0,
  },
  {
    image: '/beverages/beverage_2.svg',
    alt: 'juice',
    value: 30,
    price: 20,
  },
  {
    image: '/beverages/beverage_1.svg',
    alt: 'cocktail',
    value: 50,
    price: 30,
  },
]