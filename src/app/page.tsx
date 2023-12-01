import React from 'react'
import PetOptions from '@component/app/components/pet-options'

export default function Home() {

  return (
    <>
      <div className='naming--container'>
        <h2>Pet name</h2>
        <input type='text'/>
      </div>
      <div>
        <h3>Choose your pet!</h3>
        <PetOptions/>
        <button className='play--btn'>PLAY</button>
      </div>
    </>
  )
}
