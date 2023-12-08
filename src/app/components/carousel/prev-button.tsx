import React from 'react'

type Props = JSX.IntrinsicElements['svg'];

function PrevButton( props: Props ) {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' width='12' height='20' viewBox='0 0 12 20' fill='transparent'>
      <path
        d='M10 0V1H8V3H6V5H4V7H2V8H1V9H0V11H1V12H2V13H4V15H6V17H7H8V18V19H10V20H12V17H10V15H8V13H6V11H4V9H6V7H8V5H10V3H12V0H10Z'
        fill='black'/>
    </svg>
  )
}

export default React.memo(PrevButton)