import React from 'react'
import { Diet } from '@component/app/types/pet'

interface InteractionsListProps {
  diet?: Diet
}

export default function InteractionsList( { diet }: InteractionsListProps ) {
  return (
    <>
      {diet ? <div>Diet</div> : <div>

      </div>}
    </>
  )
}

