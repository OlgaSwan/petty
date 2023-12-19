import React from 'react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='not--found'>
      <h2>Sorry, the page was not found</h2>
      <Image src={'./not-found.svg'} alt='Not found' width={100} height={100}/>
    </div>
  )
}
