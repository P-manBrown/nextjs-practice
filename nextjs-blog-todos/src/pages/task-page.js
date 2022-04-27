import Link from 'next/link'
import { useEffect } from 'react'
import useSWR from 'swr'

import Layout from '../components/Layout'
import Task from '../components/Task'
import { getAllTasksData } from '../lib/tasks'

const fetcher = (url) => fetch(url).then((res) => res.json())
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`

export default function TaskPage({ staticFilteredTasks }) {
  const { data: tasks, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: staticFilteredTasks,
  })
  const filteredTasks = tasks?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  )
  useEffect(() => {
    mutate()
  }, [])
  return (
    <Layout title="Task page">
      <ul>
        {filteredTasks &&
          filteredTasks.map((task) => (
            <Task key={task.id} task={task} taskDeleted={mutate} />
          ))}
      </ul>
      <Link href="/main-page">
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
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  )
}

export async function getStaticProps() {
  const staticFilteredTasks = await getAllTasksData()
  return {
    props: { staticFilteredTasks },
    // useSWRとSSGのみでは表示内容が乖離すると見づらくなる
    // ISRを使用することでhtmlが再生成されるようにすることで差異を減らすことが可能
    revalidate: 3,
  }
}
