import Head from "next/head";
import styles from "./Layout.module.css"

export const appName = "Sample App"

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>{appName}</h1>
        <p>ここにはLayout.jsの内容が表示されています。</p>
      </header>
      <main>
        { children }
      </main>
    </div>
  );
}

export default Layout;