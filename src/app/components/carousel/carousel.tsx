import React, { useState } from 'react'
import Dots from '@component/app/components/carousel/dots/dots'
import PrevButton from '@component/app/components/carousel/prev-button'
import NextButton from '@component/app/components/carousel/next-button'

import styles from './carousel.module.scss'

type Props<T> = {
  slides: T[]
  children: (props: T) => JSX.Element
  visibleItemsNumber?: number
}

function Carousel<T>({ slides, children, visibleItemsNumber = 3 }: Props<T>) {
  const [start, setStart] = useState(0)

  const isControlsVisible = slides.length > visibleItemsNumber

  const visibleItems = isControlsVisible
    ? slides
        .concat(slides.slice(0, visibleItemsNumber))
        .slice(start, start + visibleItemsNumber)
    : slides

  const onNextClick = () => {
    setStart(start + 1 >= slides.length ? 0 : start + 1)
  }

  const onPrevClick = () => {
    setStart(start - 1 >= 0 ? start - 1 : slides.length - 1)
  }

  return (
    <div>
      <div className={styles.slides}>
        {isControlsVisible && (
          <PrevButton onClick={onPrevClick} className={styles.navButtons} />
        )}

        <ul className={styles.list}>
          {visibleItems.map((slide) => (children ? children(slide) : null))}
        </ul>

        {isControlsVisible && (
          <NextButton onClick={onNextClick} className={styles.navButtons} />
        )}
      </div>

      {isControlsVisible && (
        <div className={styles.dotsControls}>
          <Dots
            items={slides.length}
            active={start}
            onClick={(active) => setStart(active)}
          />
        </div>
      )}
    </div>
  )
}

export default React.memo(Carousel) as typeof Carousel
