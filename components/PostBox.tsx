import React from "react";
import styles from "../styles/components/PostBox.module.css";

type PostProps = {
  post: { title: string; date: string; content: string; imgUrl: string };
  index: number;
};

const PostBox: React.FC<PostProps> = ({
  post: { title, date, content, imgUrl },
  index,
}) => {
  return (
    <div className={styles["post-container"]}>
      <span className={styles["date"]}>{date}</span>
      <br />
      <div className={styles["heading"]}>{title}</div>
      <img className={styles["image"]} src={imgUrl} alt="post" />
      <div className={styles["content"]}>{content}</div>
    </div>
  );
};
export default PostBox;
