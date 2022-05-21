import React from "react";
import styles from "../styles/components/Posts.module.css";
import PostBox from "./PostBox";

type Post = {
    title: string, 
    date: string, 
    excerpt: string, 
    image: string,
    index: number,
};

type PostsParams = {
  slug: string,
  frontmatter: {
    title: string, 
    date: string, 
    excerpt: string, 
    image: string,
    index: number,
  }
}

const Posts: React.FC<PostsParams[]>= (props) => {
  console.log(props)
  //@ts-ignore
  const posts = props.posts as PostsParams[]
  console.log(posts)
  return (
    <div className={styles["posts-container"]}>
      {posts.map(({frontmatter, slug}, index) => (
        <PostBox key={index} index={index} slug= {slug} post={frontmatter}></PostBox>
      ))}
    </div>
  );
};
export default Posts;
