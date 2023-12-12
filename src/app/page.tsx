'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import Carousel from '@component/app/components/carousel/carousel'
import { Slide, slides } from '@component/app/shared-data/slides'
import { Pet } from '@component/app/types/pet'
import { petStore } from '@component/app/pet-store'

import styles from './styles/home.module.scss'

const createPet = ( selectedSlide: Slide, petName: string ) => {
  const pet: Pet = {
    image: selectedSlide.image,
    alt: selectedSlide.alt,
    name: petName.trim(),
    diet: selectedSlide.diet,
    fullness: 100,
    thirst: 100,
    happiness: 100,
    urine: 0,
    balance: 100,
  }
  petStore.createPet(pet)
}

export default function CreatePet() {
  const router = useRouter()
  const [selectedSlide, setSelectedSlide] = useState(slides[0])
  const [petName, setPetName] = useState('')

  return (
    <form className={styles['pet--form']}
          onSubmit={( e ) => {
            e.preventDefault()

            if (petName.trim()) {
              createPet(selectedSlide, petName)
              router.push('/game')
            } else alert('Choose your pet name!')
          }}
    >
      <div className={styles['naming--container']}>
        <h2>Pet name</h2>
        <input
          type='text'
          placeholder='Enter your pet name'
          value={petName}
          onChange={( e ) => setPetName(e.target.value)}
          maxLength={50}
        />
      </div>

      <div className={styles['pet-options--container']}>
        <h3>Choose your pet!</h3>
        <Carousel
          value={selectedSlide}
          onChange={( value ) => {
            setSelectedSlide(value)
          }}
          slides={slides}
        >
          {( slide, isSelected ) => (
            <div
              key={slide.id}
              className={styles['slide--container']}
            >
              <Image
                className={`${styles['slide--image']} ${
                  isSelected ? styles.element__selected : ''
                }`}
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
        <button className={styles['play--btn']} type='submit'>
          <Image className={styles['play--image']} src={'/buttons/play-btn.svg'} alt='Play' width={160} height={66}/>
        </button>
      </div>
    </form>
  )
}
