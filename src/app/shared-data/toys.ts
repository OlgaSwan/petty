type Toy = {
  image: string
  alt: string
  value: number
  price: number
}

export const toyList: Toy[] = [
  {
    image: '/toys/soccer-ball.svg',
    alt: 'soccer ball',
    value: 30,
    price: 10,
  },
  {
    image: '/toys/topet.svg',
    alt: 'to pet',
    value: 60,
    price: 0,
  },
  {
    image: '/toys/rugby-ball.svg',
    alt: 'rugby ball',
    value: 40,
    price: 20,
  },
]