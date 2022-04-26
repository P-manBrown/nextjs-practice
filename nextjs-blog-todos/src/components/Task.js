export default function Task({ task }) {
  return (
    <div>
      <span>{task.id}</span>
      {' : '}
      <span className="cursor-pointer border-b border-gray-500 text-white hover:bg-gray-600">
        {task.title}
      </span>
    </div>
  )
}
