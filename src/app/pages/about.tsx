import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@component/app/about/about.module.scss'

export default async function About() {
  return (
    <div className={styles['about--container']}>
      <div className={styles['about-text']}>
        <p className={styles['heading']}>
          Welcome to Petty - your pixelated Tamagotchi game.
        </p>
        <p>{`Choose your pet's skin, name it, and plunge into a world of care.
          Your role? Keep your friend hydrated, well-fed, and super loved. But remember, caring also involves spending
          your coins wisely!`}
        </p>
        <p>
          Stay alert for cute notifications indicating hunger, happiness,
          affection, or even the call of nature. Wondering how to get more coins to treat your pet? Then find a job...
          just kidding! 😄
        </p>
        <p>
          {`Interact by petting, feeding, and hydrating your companion.
          Watch it jump with joy with every act of kindness. But don't forget about bathroom breaks, when the urine
          level hits 50, it's time for a little walk. It's not only a nice break but also a great way to earn more
          coins.`}
        </p>
        <p>
          Get ready to go on a pixelated journey with <span style={{ fontWeight: 'bolder' }}>Petty</span> every click
          brings you closer to a happier pet!
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
        {/*Do you want to add some info from ur GitHub profile?*/}
      </div>
    </div>
  )
}
