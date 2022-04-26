import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {' : '}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer border-b border-gray-500 text-white hover:bg-gray-600">
          {post.title}
        </span>
      </Link>
    </div>
  )
}
