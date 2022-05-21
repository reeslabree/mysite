import React from "react";
import styles from "../styles/components/PostBox.module.css";

type PostProps = {
  post: { title: string; date: string; excerpt: string; image: string, index: number };
  slug: string,
  index: number;
};

const PostBox: React.FC<PostProps> = ({
  post: { title, date, excerpt, image },
  slug,
  index,
}) => {
  const link = `/blog/${slug}`
  return (
    <div className={styles["post-container"]}>
      <a href={link}>
        <span className={styles["date"]}>{date}</span>
        <br />
        <div className={styles["heading"]}>{title}</div>
        <img className={styles["image"]} src={image} alt="post" />
        <div className={styles["content"]}>{excerpt}</div>
      </a>
    </div>
  );
};
export default PostBox;
