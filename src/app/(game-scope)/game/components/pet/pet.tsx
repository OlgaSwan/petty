'use client'

import React, { useEffect, useRef, memo } from 'react'
import gsap from 'gsap'

import { onAction } from 'nanostores'
import { petStore } from '@component/app/pet-store'

import Noti from '../noti/noti'
import { notiStore } from '../noti/store'
import AnimatedBreathing from '@component/app/components/animations/animated-breathing'

import styles from '@component/app/(game-scope)/game/game.module.scss'
import { useGSAP } from '@gsap/react'

type PetProps = {
  image: string
  name: string
  alt: string
}

function Pet( { image, name, alt }: PetProps ) {
  const petRef = useRef<HTMLDivElement>(null)
  const { contextSafe } = useGSAP({ scope: petRef })

  useEffect(() => {
    let id: NodeJS.Timeout
    const reduceNeeds = () => {
      id = setTimeout(() => {
        petStore.reduceNeeds('happiness')
        petStore.reduceNeeds('fullness')
        petStore.reduceNeeds('thirst')
        reduceNeeds()
      }, 10000)
    }
    reduceNeeds()
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    function sayLoveYou() {
      id = setTimeout(() => {
        notiStore.add('speak')
      }, 60000)
    }

    let id: NodeJS.Timeout
    sayLoveYou()

    return () => clearTimeout(id)
  }, [])

  const animatePetJump = contextSafe(
    () => {
      if (petRef.current) {
        gsap.fromTo(
          petRef.current,
          { y: -100, duration: 2, ease: 'expo.in' },
          { y: 0, duration: 1, ease: 'expo.out' },
        )
      }
    },
  )

  useEffect(() => {
    return onAction(petStore.store, ( { actionName } ) => {
      if (['eat', 'drink', 'play'].includes(actionName)) {
        animatePetJump()
      }
    })
  }, [animatePetJump])

  return (
    <>
      <Noti target={petRef}/>
      <div className={styles['pet--container']} onClick={() => animatePetJump()}>
        <h2 style={{ alignSelf: 'center' }}>{name}</h2>
        <div ref={petRef} style={{ margin: '0', padding: '0' }}>
          <AnimatedBreathing
            image={image}
            alt={alt}
            width={350}
            height={250}
          />
        </div>
      </div>
    </>
  )
}

export default memo(Pet)
