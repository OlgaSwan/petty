import React from 'react'

import { ProgressBar } from '@codecademy/gamut'

interface BarProps {
  title: string
  percent: number
}

export default function Bar( { title, percent }: BarProps ) {
  return (
    <div style={{ maxWidth: '300px' }}>
      <h4>{title}</h4>
      <ProgressBar percent={percent} variant='yellow' size='large'/>
    </div>
  )
}
