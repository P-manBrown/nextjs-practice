import Head from 'next/head'

export default function Layout({ children, title = 'Default title' }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 font-mono text-white">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-6 w-full items-center justify-center text-sm text-gray-500">
        @Udemy 2022
      </footer>
    </div>
  )
}
