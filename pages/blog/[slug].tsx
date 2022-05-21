import React from "react";
import matter from "gray-matter";
import { marked } from "marked";
import fs from "fs";
import path from "path";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import { GetStaticPaths, GetStaticProps } from "next";
import styles from "../../styles/pages/Post.module.css";
import { NextSeo } from "next-seo";

type PostPageParams = {
  frontmatter: {
    title: string;
    date: string;
    image: string;
  };
  slug: string;
  content: string;
};

const PostPage: React.FC<PostPageParams> = ({
  frontmatter: { title, date, image },
  slug,
  content,
}) => {
  console.log(image);
  return (
    <>
    <NextSeo 
      title='reeslabree.com | Blog'
    />
    <div className={styles.container}>
      <img
        src={image}
        className={styles.image}
        alt="The cover image for this article."
      />

      <div className={styles.header}>
        <h1 className="post-title">{title}</h1>
        <p className="post-date">Posted on {date}</p>
      </div>

      <div className={styles["post-body"]}>
        <div
          className="image"
          dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
        ></div>
      </div>
    </div>
    </>
  );
};
export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const dirpath = path.join("posts");
  console.log(dirpath);
  const files = fs.readdirSync(dirpath);

  const paths = files.map((path) => {
    return {
      params: {
        slug: path.replace(".md", ""),
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

type GetStaticPropsParams = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mdWithMeta = fs.readFileSync(
    //@ts-ignore
    path.join("posts", params.slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(mdWithMeta);

  return {
    props: {
      frontmatter,
      params,
      content,
    },
  };
};
