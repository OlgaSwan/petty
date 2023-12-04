'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import Carousel from '@component/app/components/carousel/carousel'
import { slides } from '@component/app/shared-data/slides'

import { Pet } from '@component/app/types/pet'
import { petStore } from '@component/app/pet-store'

const createPet = ( index: number, petName: string ) => {
  const slide = slides.at(index)
  if (slide) {
    const pet: Pet = {
      image: slide.image,
      alt: slide.alt,
      name: petName,
      diet: slide.diet,
      fullness: 100,
      thirst: 100,
      happiness: 100,
      urine: 0,
    }
    petStore.createPet(pet)
  }
}

export default function Home() {
  const router = useRouter()

  const [index, setIndex] = useState(1)
  const [petName, setPetName] = useState('')

  return (
    <>
      <div className='naming--container'>
        <h2>Pet name</h2>
        <input type='text' value={petName} onChange={( e ) => setPetName(e.target.value)} maxLength={50}/>
      </div>

      <div className='pet-options--container'>
        <h3>Choose your pet!</h3>
        <Carousel selectedSlide={( index ) => {
          const math = index < slides.length ? index : 0
          setIndex(math)
        }} slides={slides} visibleItemsNumber={3}>
          {( slide ) => (
            //stylesheet doesnt applies
            <div key={slide.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <Image
                src={slide.image}
                alt={slide.alt}
                width={238}
                height={160}
                priority
              />
              <h3>{slide.alt}</h3>
            </div>
          )}
        </Carousel>
        <button className='play--btn' onClick={() => {
          if (petName) {
            createPet(index, petName)
            router.push('/game')
          } else alert('Choose ur pet name!')
        }}>
          PLAY
        </button>
      </div>
    </>
  )
}
