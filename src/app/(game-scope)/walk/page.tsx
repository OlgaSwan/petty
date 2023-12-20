import dynamic from 'next/dynamic'

const Walk = dynamic(() => import('../../pages/walk'))

export default function Page() {
  return <Walk/>
}