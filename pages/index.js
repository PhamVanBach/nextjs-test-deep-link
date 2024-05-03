import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <p className={styles.description}>Version 0.0.1</p>

        <div className={styles.grid}>
          <a href="/details" className={styles.card}>
            <h3>Details &rarr;</h3>
          </a>
        </div>
      </main>
    </div>
  );
}
