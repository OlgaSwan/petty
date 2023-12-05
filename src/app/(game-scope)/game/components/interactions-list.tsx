'use client'

import React from 'react'

import { Diet } from '@component/app/types/pet'

import Image from 'next/image'

interface InteractionsListProps {
  diet?: Diet
  array: readonly { image: string, alt: string, value: number, diet?: Diet }[]
  onClick: ( value: number ) => void
}

export default function InteractionsList( { diet, array, onClick }: InteractionsListProps ) {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        backgroundColor: 'thistle',
        padding: '20px',
        borderRadius: '10px',
      }}>
        {diet ? array.filter(e => e.diet === diet)
                     .map(( e, index ) => <Image key={index} src={e.image} alt={e.alt} width={80}
                                                 height={80} onClick={() => onClick(e.value)}/>)
          : array.map(( e, index ) =>
            <Image key={index} src={e.image} alt={e.alt} width={80} height={80} onClick={() => onClick(e.value)}/>)}
      </div>
    </>
  )
}

