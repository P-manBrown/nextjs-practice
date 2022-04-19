import Head from "next/head";

const name = "P-man Brown"
export const siteTitle = "Next.js blog"

function Layout({ chirdren }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header>
        <img src="/images/pb-logo.jpg" />
        <h1>{name}</h1>
      </header>
      <main>
        {chirdren}
      </main>
    </>
  );
}

export default Layout;