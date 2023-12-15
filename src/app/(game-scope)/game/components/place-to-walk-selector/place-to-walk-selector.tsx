import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Carousel from '@component/app/components/carousel/carousel'
import { walkBackgroundList } from '@component/app/shared-data/walkBackgrounds'

import styles from './place-to-walk-selector.module.scss'

export default function PlaceToWalkSelector() {
  const router = useRouter()
  const [place, setPlace] = useState(walkBackgroundList[0])

  return (
    <div className={styles.container}>
      <h4>Wanna earn some coins?</h4>
      <Carousel
        value={place}
        onChange={( value ) => {
          setPlace(value)
        }}
        slides={walkBackgroundList}
        visibleItemsNumber={1}
      >
        {( slide ) => (
          <Image
            style={{ borderRadius: '10px' }}
            key={slide}
            src={slide}
            alt={slide}
            width={150}
            height={100}
            priority
          />
        )}
      </Carousel>
      <button className={styles['walk--btn']} onClick={() => router.push(`/walk?place=${place}`)}>
        <Image className={styles['walk--image']} src={'/buttons/walk-btn.svg'} alt='Play' width={88} height={36}/>
      </button>
    </div>
  )
}
