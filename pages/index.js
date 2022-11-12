import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name='keywords' content='portfolio, web development, project' />
      </Head>
      <h1>Portfolio</h1>
    </div>
  )
}
