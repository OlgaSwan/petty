'use client'

import React from 'react'
import Image from 'next/image'

import { useStore } from '@nanostores/react'
import { petStore } from '@component/app/pet-store'

export default function Balance() {

  const pet = useStore(petStore.store)
  return (
    <>
      {pet &&
          <li style={{ textDecoration: 'none' }}>
              <div className='balance'><span>Balance:</span>
                  <Image src={'/game-asset/coin.svg'} alt='Coin' width={20}
                         height={20}/>
                {pet.balance}
              </div>
          </li>
      }
    </>
  )
}


