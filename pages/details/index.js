import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Details() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to Details page
        </h1>
        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>&rarr; Home</h3>
          </a>
        </div>
      </main>
    </div>
  );
}
