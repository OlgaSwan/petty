import React from 'react'

import { ProgressBar } from '@codecademy/gamut'
import styles from '@component/app/(game-scope)/game/game.module.scss'

interface BarProps {
  title: string
  percent: number
}

export default function Bar( { title, percent }: BarProps ) {
  return (
    <div className={styles['bar--container']}>
      <h4 style={{ alignSelf: 'start' }}>{title}</h4>
      <div className={styles['bar']}>
        <ProgressBar percent={percent} variant='yellow' size='large'/>
      </div>
    </div>
  )
}
