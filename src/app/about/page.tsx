import dynamic from 'next/dynamic'

const About = dynamic(() => import('../pages/about'))
export default function Page() {
  return <About/>
}