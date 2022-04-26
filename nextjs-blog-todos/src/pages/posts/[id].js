import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '../../components/Layout'
import { getAllPostsIds, getPostData } from '../../lib/posts'

export default function Post({ post }) {
  const router = useRouter()
  // fallbackをtrueにした場合には条件式に`router.isFallback ||`を追加する必要がある
  // Loading...が表示される条件にFallback中を追加するため
  if (router.isFallback || !post) {
    return <div>Loading...</div>
  }
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {'ID: '}
        {post.id}
      </p>
      <p className="mb-4 text-xl font-bold">{post.title}</p>
      <p className="mb-12">{post.created_at}</p>
      <p className="px-10">{post.content}</p>
      <Link href="/blog-page">
        <div className="mt-12 flex cursor-pointer">
          <svg
            className="mr-3 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostsIds()

  return {
    paths,
    // 動的なデータに対応するにはtrueにする必要がある
    // falseでは404ページが表示されてしまう
    // trueにすることで新しく作成したページがサーバーサイドで生成され表示される
    // その後はSSGと同じような挙動となる（コンテンツの内容を変更しても更新されない）
    // 更新したい場合にはISRを使用する
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id)
  return {
    props: {
      post,
    },
    // ISRを使用するための記述
    // インターバルの時間を秒単位で指定
    revalidate: 3,
  }
}
