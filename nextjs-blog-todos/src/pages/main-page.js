import Link from 'next/link'
import { useRouter } from 'next/router'
import Cookie from 'universal-cookie'

import Layout from '../components/Layout'

const cookie = new Cookie()

export default function MainPage() {
  const router = useRouter()
  const logout = () => {
    cookie.remove('access_token')
    router.push('/')
  }
  return (
    <Layout title="Main page">
      <div className="mb-10">
        <Link href="/blog-page">
          <a className="mr-8 rounded  bg-indigo-500 px-4 py-12 text-white hover:bg-indigo-600">
            Visit Blog by SSG + ISR
          </a>
        </Link>
        <Link href="/task-page">
          <a className="ml-8 rounded bg-gray-500 px-4 py-12 text-white hover:bg-gray-600">
            Visit Task by ISR + CSR
          </a>
        </Link>
      </div>

      <svg
        onClick={logout}
        className="mt-10 h-6 w-6 cursor-pointer"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </Layout>
  )
}
