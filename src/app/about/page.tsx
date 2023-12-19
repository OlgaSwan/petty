import React from 'react'
import Pet from '../(game-scope)/game/components/pet/pet'
import Image from 'next/image'

import styles from './about.module.scss'
import Link from 'next/link'

export default async function About() {
  return (
    <div className={styles['grid-container']}>
      <div className={styles['about-text']}>
        <h4>
          Welcome to &apos;Petty&apos;—your beloved pixelated Tamagotchi
          adventure!
        </h4>
        <p>
          Choose your pet&apos;s skin, name it, and plunge into a world of care.
          Watch as your friend loses happiness, fullness, and thirst every few
          seconds. Your role? Keep them fed, watered, and loved—but beware, it
          costs coins!
        </p>
        <p>
          Stay alert for endearing notifications indicating hunger, happiness,
          affection, or even the call of nature. Want more coins to buy
          something for your pet? Find a job... just kidding! 😄
        </p>
        <p>
          Interact by petting, feeding, and hydrating your companion, and revel
          in the joyful jumps with every action. Keep an eye on its urine level;
          when it hits 50, take your pet for a stroll to spread the love and
          earn coins.
        </p>
        <p>
          Get ready to embark on a pixelated journey filled with care, joy, and
          endless fun—because with &apos;Petty&apos; every click brings you
          closer to a happier pet!
        </p>
      </div>
      <Link href='/' className={styles['play--link']}>
        <Image
          className={styles['play--image']}
          src={'/buttons/play-btn.svg'}
          alt='Play'
          width={160}
          height={66}
        />
      </Link>
      <div className={styles['github-info']}>
        Olya chydo {/*Do you want to add some info from ur github profile?*/}
      </div>
      <div className={styles['pet']}>
        <Pet image='pets/bat.svg' alt='Bat' name='Batty' />
      </div>
    </div>
  )
}
