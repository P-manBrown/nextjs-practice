import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <section>
        <p>未経験からエンジニア転職を目指して日々学習に励んでいます。</p>
      </section>
      <section>
        <h2>学習の記録</h2>
        <div>
          <article>
            <Link href="">
              <img src="/images/thumbnail01.jpg" />
            </Link>
            <Link href="">
              <a>【SQL】SQL入門</a>
            </Link>
            <br />
            <small>
              2021年12月22日
            </small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
