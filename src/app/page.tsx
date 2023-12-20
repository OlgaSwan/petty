'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import Carousel from '@component/app/components/carousel/carousel'
import { Slide, slides } from '@component/app/shared-data/slides'
import { Pet } from '@component/app/types/pet'
import { petStore } from '@component/app/pet-store'

import AnimatedHeartBeating from '@component/app/components/animations/animated-heart-beating'
import AnimatedSwap from '@component/app/components/animations/animated-swap'

import styles from './styles/home.module.scss'

const createPet = ( selectedSlide: Slide, petName: string ) => {
  const pet: Pet = {
    image: selectedSlide.image,
    alt: selectedSlide.alt,
    name: petName,
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
  const formRef = useRef<HTMLFormElement>(null)
  const [showHeart, setShowHeart] = useState(true)
  const showHeartRef = useRef(showHeart)
  const [selectedSlide, setSelectedSlide] = useState(slides[0])
  const [petName, setPetName] = useState('')

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const { value } = e.target
    const alphanumericOnly = value.replace(/[^a-zA-Z0-9 ]/g, '')
    setPetName(alphanumericOnly)
  }

  useEffect(() => {
    showHeartRef.current = showHeart
  }, [showHeart])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop
      if (scrollPosition < 100 !== showHeartRef.current) {
        setShowHeart(scrollPosition < 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <form ref={formRef}
          className={showHeart ? styles['pet--form'] : `${styles['pet--form']} ${styles['hide--heart']}`}
          onSubmit={( e ) => {
            e.preventDefault()

            if (petName.trim()) {
              createPet(selectedSlide, petName)
              router.push('/game')
            } else {
              createPet(selectedSlide, selectedSlide.alt)
              router.push('/game')
            }
          }}
    >
      {showHeart && <AnimatedHeartBeating image={'/game-asset/heart.svg'} alt='Heart beating' style='heart'/>}
      <div className={styles['naming--container']}>
        <h2>Pet name</h2>
        <input
          type='text'
          placeholder='Enter your pet name'
          value={petName}
          onChange={handleChange}
          maxLength={24}
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
      <AnimatedSwap images={['/game-asset/poo_1.svg', '/game-asset/poo_2.svg']} alt='Poo' style='poo'/>
    </form>
  )
}

//when I wrote this code, only God & I understood what it did.
//Now... only God knows.