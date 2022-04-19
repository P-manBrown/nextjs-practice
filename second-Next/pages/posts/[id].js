import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

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

// getStaticPathsはgetStaticPropsと同時に使用する必要がある
// 外部のデータを取得する必要があるため
export async function getStaticProps({ params }) {
  // getPostDataにはidを渡す必要があるため(params.id)と記述
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Article</title>
      </Head>
        <h1>{postData.title}</h1>
        <br />
        <small>{postData.date}</small>
        <br />
        <p>{postData.blogContentHTML}</p>

        <Link href="/">ホームへ戻る</Link>
    </Layout>
  );
}