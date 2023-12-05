import React from 'react'

interface InteractionProps {
  image: string
  value: number
}

export default function Interaction( { image, value }: InteractionProps ) {
  return (
    <div>
      {image} {value}
    </div>
  )
}
