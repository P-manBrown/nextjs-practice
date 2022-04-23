import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {' : '}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer border-b border-blue-500 text-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  )
}
