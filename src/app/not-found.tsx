import React from 'react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='not--found'>
      <h3>Sorry, page is not found</h3>
      <Image src={'./not-found.svg'} alt='Not found' width={200} height={200}/>
    </div>
  )
}
