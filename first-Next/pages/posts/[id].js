import { getAllPostIds, getPostData } from "../../lib/post";

export async function getStaticPath() {
  const paths = getAllPostIds();
  return {
    paths,
    // fallbackをfalseにすることでpaths以外にアクセスした際に404を表示する
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <>
      <h1>{postData.title}</h1>
      <p>{postData.blogContentHTLM}</p>
    </>
  );
}