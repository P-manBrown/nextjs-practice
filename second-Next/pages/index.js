import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>未経験からエンジニア転職を目指して日々学習に励んでいます。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>学習の記録</h2>
        <div className={styles.grid}>
          <article>
            <Link href="">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="">
              <a className={utilStyles.boldText}>【SQL】SQL入門</a>
            </Link>
            <br />
            <smal className={utilStyles.lightText}>
              2021年12月22日
            </smal>
          </article>
          <article>
            <Link href="">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="">
              <a className={utilStyles.boldText}>【SQL】SQL入門</a>
            </Link>
            <br />
            <smal className={utilStyles.lightText}>
              2021年12月22日
            </smal>
          </article>
          <article>
            <Link href="">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="">
              <a className={utilStyles.boldText}>【SQL】SQL入門</a>
            </Link>
            <br />
            <smal className={utilStyles.lightText}>
              2021年12月22日
            </smal>
          </article>
          <article>
            <Link href="">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="">
              <a className={utilStyles.boldText}>【SQL】SQL入門</a>
            </Link>
            <br />
            <smal className={utilStyles.lightText}>
              2021年12月22日
            </smal>
          </article>
        </div>
      </section>
    </Layout>
  )
}
