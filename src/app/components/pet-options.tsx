'use client'

import React from 'react'

import Carousel from '@component/app/components/carousel/carousel'
import Image from 'next/image'
import { Diet, Pet } from '@component/app/types/pet'

type Slide = {
  id: string
  image: string
  alt: string
  diet: Diet
}

const slides: Slide[] = [
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

const createPet = ( index: number, petName: string ) => {
  const slide = slides.at(index)
  if (slide) {
    const pet: Pet = {
      petId: slide.id,
      name: petName,
      diet: slide.diet,
      fullness: 100,
      thirst: 100,
      happiness: 100,
      urine: 0,
    }
    localStorage.setItem('pet', JSON.stringify(pet))
  }
}

function PetOptions() {
  return (
    <div className='pet-options--container'>
      <Carousel slides={slides} visibleItemsNumber={3}>
        {( slide ) => (
          <Image
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            width={238}
            height={160}
            priority
          />
        )}
      </Carousel>
      <button className='play--btn' onClick={() => createPet(2, 'poppy')}>PLAY</button>
    </div>
  )
}

export default React.memo(PetOptions)