import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import type { GitHubUser } from '@component/app/types/github'

import styles from '@component/app/about/about.module.scss'

async function getServerSideData(): Promise<GitHubUser | undefined> {
  try {
    const response = await fetch('https://api.github.com/users/OlgaSwan', { cache: 'no-store' })
    return await response.json() as GitHubUser
  } catch (error) {
    if (error instanceof Error) console.warn(error.message)
  }
}

export default async function About() {
  const githubData = await getServerSideData()

  return (
    <div className={styles['about--container']}>
      <div className={styles['about--text']}>
        <p className={styles['heading']}>
          Welcome to Petty - your pixelated Tamagotchi game.
        </p>
        <p>{`Choose your pet's skin, name it, and plunge into a world of care.
          Your role? Keep your friend hydrated, well-fed, and super loved. But remember, caring also involves spending
          your coins wisely!`}
        </p>
        <p>
          Stay alert for cute notifications indicating hunger, happiness,
          affection, or even the call of nature. Wondering how to get more coins to treat your pet? Then find a job...
          just kidding! 😄
        </p>
        <p>
          {`Interact by petting, feeding, and hydrating your companion.
          But don't forget about bathroom breaks, when the urine level hits 50, it's time for a little walk. 
          It's not only a nice break but also a great way to earn more coins.`}
        </p>
        <p>
          Get ready for an exciting journey with <span style={{ fontWeight: 'bolder' }}>Petty</span>!
        </p>
      </div>
      <Link href='/' className={styles['play--link']}>
        <Image
          className={styles['play--image']}
          src={'/buttons/play-btn.svg'}
          alt='Play'
          width={160}
          height={66}
        />
      </Link>
      {githubData &&
          <div className={styles['github--container']}>
              <h3>My GitHub <Link className={styles.link} href={githubData.html_url} target='blank'>Profile</Link></h3>
              <div className={styles.content}>
                  <Link className={styles.avatar} href={githubData.html_url} target='blank'>
                      <Image src={githubData.avatar_url} alt='Olga Swan' width={100} height={100}
                             style={{ border: '4px solid black', borderRadius: '14px' }}/>
                  </Link>
                  <div className={styles.info}>
                      <p>Login: {githubData.login}</p>
                      <p>Bio: {githubData.bio}</p>
                      <p>Public repositories: {githubData.public_repos}</p>
                  </div>
              </div>
          </div>
      }
    </div>
  )
}
