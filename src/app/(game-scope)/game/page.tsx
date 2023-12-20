import dynamic from 'next/dynamic'

const Game = dynamic(() => import('../../pages/game'))

export default function Page() {
  return <Game/>
}