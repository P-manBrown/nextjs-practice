export default function Post({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {' : '}
      <span className="cursor-pointer border-b border-gray-500 text-white hover:bg-gray-600">
        {post.title}
      </span>
    </div>
  )
}
