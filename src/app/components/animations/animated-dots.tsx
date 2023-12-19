'use client'

import React, { useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function AnimatedDots() {
  const SVGRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.dot',
      { opacity: 0 },
      { opacity: 1, duration: 0.8, stagger: 0.4 },
    )
  }, { scope: SVGRef })

  return (
    <svg ref={SVGRef} width='20' height='5' viewBox='0 0 41 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path className='dot' d='M0 2.47955e-05H8.33172V8.33179H0V2.47955e-05Z' fill='black'/>
      <path className='dot' d='M16 2.47955e-05H24.3317V8.33179H16V2.47955e-05Z' fill='black'/>
      <path className='dot' d='M32 2.47955e-05H40.3317V8.33179H32V2.47955e-05Z' fill='black'/>
    </svg>
  )
}
