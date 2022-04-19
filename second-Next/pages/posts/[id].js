import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

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