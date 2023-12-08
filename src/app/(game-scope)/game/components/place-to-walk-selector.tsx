import Carousel from '@component/app/components/carousel/carousel'
import { walkBackgroundList } from '@component/app/shared-data/walkBackgrounds'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './place-to-walk-selector.module.scss'
export default function PlaceToWalkSelector() {
  const router = useRouter()
  const [place, setPlace] = useState(walkBackgroundList[0])

  return (
    <div className={styles.container}>
      <p>Do you want to spread urine and earn some money?</p>
      <Carousel
        value={place}
        onChange={(value) => {
          setPlace(value)
        }}
        slides={walkBackgroundList}
        visibleItemsNumber={1}
      >
        {(slide) => (
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
      <button onClick={() => router.push(`/walk?place=${place}`)}>
        Go for a walk
      </button>
    </div>
  )
}
