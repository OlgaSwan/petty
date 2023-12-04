import React from 'react'

import { ProgressBar } from '@codecademy/gamut'

interface BarProps {
  title: string
  percent: number
}

export default function Bar( { title, percent }: BarProps ) {
  return (
    <div className='bar--container'>
      <h3>{title}</h3>
      <ProgressBar percent={percent} variant='yellow' size='xl'/>
    </div>
  )
}
