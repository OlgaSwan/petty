import React from 'react'

type Props = JSX.IntrinsicElements['svg'];

function NextButton( props: Props ) {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' width='12' height='20' viewBox='0 0 12 20' fill='transparent'>
      <path
        d='M11 9V8H10V7H8V5H6V3H4V1H2V0H0V3H2V5H4V7H6V9H8V11H6V13H4V15H2V17H0V20H2V19H4V17H6V16V15H8V14V13H10V12H11V11H12V10V9H11Z'
        fill='black'/>
    </svg>
  )
}

export default React.memo(NextButton)