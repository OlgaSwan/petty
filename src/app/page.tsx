'use client'

import React, { useState } from 'react'

import Carousel from '@component/app/components/carousel/carousel'
import Image from 'next/image'
import { slides } from '@component/app/shared-data/slides'

import { Pet } from '@component/app/types/pet'

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

export default function Home() {
  const [index, setIndex] = useState(1)
  const [petName, setPetName] = useState('')

  return (
    <>
      <div className='naming--container'>
        <h2>Pet name</h2>
        <input type='text' value={petName} onChange={( e ) => setPetName(e.target.value)}/>
      </div>

      <div className='pet-options--container'>
        <h3>Choose your pet!</h3>
        <Carousel selectedSlide={( index ) => {
          const math = index < slides.length ? index : 0
          setIndex(math)
        }} slides={slides} visibleItemsNumber={3}>
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
        <button className='play--btn' onClick={() => {
          if (petName) createPet(index, petName)
          else alert('Choose ur pet name!')
        }}>
          PLAY
        </button>
      </div>
    </>
  )
}
