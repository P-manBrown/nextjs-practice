import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({ children, title = 'HP by Nextjs' }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-sm text-gray-600">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex h-14 items-center pl-8">
            <Link href="/">
              <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                Home
              </a>
            </Link>
            <Link href="/blog-page">
              <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                Blog
              </a>
            </Link>
            <Link href="/contact-page">
              <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                Contact
              </a>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image
            className="rounded-full"
            src="/P-man_Brown_logo.jpg"
            alt="P-man_Brown"
            width={40}
            height={40}
          />
        </a>
      </footer>
    </div>
  )
}
