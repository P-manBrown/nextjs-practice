import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds } from "../../lib/post";

// 動的ルーティングのためにはgetStaticPathsを使用する必要がある。
// getStaticPathsにはデータのPathが必要になる→Post.jsでPathを返す関数を準備する

export async function getStaticPaths() {
  // pathを指定する。ここではpost.jsで設定したgetAllPostIdsを指定
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export default function Post() {
  return (
    <Layout>
      <Head>
        <title>Article</title>
      </Head>
        <h1>最初の投稿</h1>
        <Link href="/">ホームへ戻る</Link>
    </Layout>
  );
}