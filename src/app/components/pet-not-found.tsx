import Link from 'next/link'

export default function PetNotFound() {
  return (
    <div>
      <p>
        Sorry, but you don`t have a pet. Click{' '}
        <Link style={{ textDecoration: 'underline' }} href='/'>
          here
        </Link>{' '}
        to create one
      </p>
    </div>
  )
}
