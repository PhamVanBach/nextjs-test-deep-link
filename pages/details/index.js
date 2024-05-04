import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Details() {
  const redirecttoNativeApp = (/*potential params */) => {
    document.location = "reactnativedeeplink://";
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome to Details page</h1>

        <div className={styles.grid}>
          <button onClick={redirecttoNativeApp}>Click to go to app</button>
        </div>
        <div className={styles.grid}>
          <a
            href="https://nextjs-test-deep-link.vercel.app/"
            className={styles.description}
          >
            Click to go to nextjs-test-deep-link
          </a>
        </div>
        <div className={styles.grid}>
          <a href="/" className={styles.card}>
            <h3>&rarr; Home</h3>
          </a>
        </div>
      </main>
    </div>
  );
}
