import Head from 'next/head';
import ThreeScene from '../components/three/threeScene';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>My NextJS Shopify App</title>
        <meta name="description" content="My NextJS Shopify App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my NextJS Shopify App!
        </h1>
        <ThreeScene />
      </main>
    </>
  );
}
