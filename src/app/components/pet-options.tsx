'use client'

import React from 'react'

import Carousel from '@component/app/components/carousel/carousel'
import Image from 'next/image'

type Slide = {
  id: string
  image: string
  alt: string
}

const slides: Slide[] = [
  {
    id: '1',
    image: '/cat_3colors.svg',
    alt: 'Three-colored cat',
  },
  {
    id: '2',
    image: 'cat_heterochromia.svg',
    alt: 'Heterochromia cat',
  },
  {
    id: '3',
    image: 'cat_red.svg',
    alt: 'Red cat',
  },
  {
    id: '4',
    image: 'cat_black.svg',
    alt: 'Black cat',
  },
]

function PetOptions() {
  return (
    <Carousel slides={slides} visibleItemsNumber={3}>
      {(slide) => (
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
  )
}

export default React.memo(PetOptions)
