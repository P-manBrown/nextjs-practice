import Head from "next/head";
import styles from "./layout.module.css"

const name = "P-man Brown"
export const siteTitle = "Next.js blog"

function Layout({ chirdren }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={styles.header}>
        <img src="/images/pb-logo.jpg" />
        <h1>{name}</h1>
      </header>
      <main>
        {chirdren}
      </main>
    </div>
  );
}

export default Layout;