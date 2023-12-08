import Carousel from '@component/app/components/carousel/carousel'
import { walkBackgroundList } from '@component/app/shared-data/walkBackgrounds'
import Image from 'next/image'
import { useState } from 'react'

export default function PlaceToWalkSelector() {
  const [place, setPlace] = useState(walkBackgroundList[0])
  return (
    <div>
      <p>Do you want to spread urine and earn some money?</p>
      <Carousel
        value={place}
        onChange={(value) => {
          setPlace(value)
        }}
        slides={walkBackgroundList}
        visibleItemsNumber={1}
      >
        {(slide, isSelected) => (
          <Image
            key={slide}
            src={slide}
            alt={slide}
            width={150}
            height={100}
            priority
          />
        )}
      </Carousel>
    </div>
  )
}
