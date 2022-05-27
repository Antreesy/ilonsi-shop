import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material'
import { CustomButton } from '../components/UiKit'
import Counter from '../components/Counter/Counter'

import styles from '../styles/Index.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ILONSI SHOP | UI Kit page</title>
      </Head>

      <main className={styles.main}>
        <h1>
          Redux page
        </h1>

        <p className={styles.description}>
          Go back to {' '}
          <Link href="/">
            <a className={styles.title__link}>/index</a>
          </Link>
          {' '}page
        </p>

        <Counter />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
