'use client'

import React from 'react'
import { petStore } from '@component/app/pet-store'

import { Diet } from '@component/app/types/pet'
import { useStore } from '@nanostores/react'
import Image from 'next/image'

interface InteractionsListProps {
  array: { image: string, alt: string, value: number, diet?: Diet }[]
}

export default function InteractionsList( { array }: InteractionsListProps ) {
  const pet = useStore(petStore.store)
  const hasObjectWithDiet = array.some(( e ) => e.diet !== undefined)
  return (
    <>
      {pet &&
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            backgroundColor: 'thistle',
            padding: '20px',
            borderRadius: '10px',
          }}>
            {hasObjectWithDiet ? array.filter(e => e.diet === pet.diet)
                                      .map(( e, index ) => <Image key={index} src={e.image} alt={e.alt} width={80}
                                                                  height={80}/>)
              : array.map(( e, index ) =>
                <Image key={index} src={e.image} alt={e.alt} width={80} height={80}/>)}
          </div>
      }
    </>
  )
}

