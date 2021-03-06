// ディレクトリを取得するためにインポート
import path from "path";
import fs from "fs";
// メタデータを分析をするためにインポート
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// カレントディレクトリとpostsのpathを結合→cwd/posts
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取り出すための関数
export function getPostsData() {
  // postDirectory(= cwd/postsディレクトリ内のファイル名が配列で入っている)をfs.readdirSyncで読み出してfileNamesに格納
  const fileNames = fs.readdirSync(postsDirectory);
  // fileNamesからファイル名を一つずつ取り出す
  const allPostData = fileNames.map((fileName) => {
    // 取り出す際にreplace関数で拡張子を取り除く
    // 第一引数に/\.md$/を指定し、第二引数に空文字を指定することで除外することができる
    const id = fileName.replace(/\.md$/, "");  // ファイル名＝id

    // マークダウンファイルを文字列として読み取る
    // postDirectory(= cwd/posts)とfileName(= ssg-ssr等)を結合してfullPathに格納
    const fullPath = path.join(postsDirectory, fileName);
    // それぞれの.mdファイルの内容を読み出し。文字列で読み出したいのでutf8を指定
    const fileContents= fs.readFileSync(fullPath, "utf8");
    // マークダウンファイルのメタデータの分析
    // matterResultには.mdのtitle等がオブシェトの配列として格納されている
    const matterResult = matter(fileContents);
    // idおよびデータを返す(allPostData)
    return {
      id,
      ...matterResult.data,
    }
  });
  // getPostsDataに関する返り値
  return allPostData;
}


// getStaticPathでreturnで使うpathを取得
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// idに基づいて記事データを返す
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  // matterResult.content だと単なる文字列
  const blogContent = await remark().use(html).process(matterResult.content);
  const blogContentHTML = blogContent.toString();
  return {
    id,
    blogContentHTML,
    ...matterResult.data,
  };
}