import React from "react";
import Posts from "../../components/Posts";
import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextSeo } from "next-seo";

const Blog: React.FC<PostsParams[]> = (posts) => {
  return (
    <>
    <NextSeo 
      title='reeslabree.com | Blog'
    />
    <div
      style={{
        fontSize: "2rem",
        display: "flex",
        justifyContent: "left",
        marginTop: "2rem",
      }}
    >
      <Posts { ... posts } />
    </div>
    </>
  );
};
export default Blog;

type PostsParams = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    image: string;
    index: number;
  };
};

//fetch data at build time
export const getStaticProps: GetStaticProps = async () => {
  //gets files from posts directory
  const files = fs.readdirSync(path.join("posts"));

  //get slug & frontmatter from '/posts'
  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    //get frontmatter
    const mdWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    //parse frontmatter
    const { data: frontmatter } = matter(mdWithMeta);

    return {
      slug,
      frontmatter,
    } as unknown as PostsParams;
  });


  return {
    props: {
      posts,
    },
  };
};
