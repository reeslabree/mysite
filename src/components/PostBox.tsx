import React from "react";
import "./style/PostBox.css";

type PostProps = {
  post: { title: string; date: string; content: string; imgUrl: string };
  index: number;
};

const PostBox: React.FC<PostProps> = ({
  post: { title, date, content, imgUrl },
  index,
}) => {
  return (
    <div className="post-container">
      <span className="date">{date}</span>
      <h5 className="heading">{title}</h5>
      <img className="image" src={imgUrl} alt="post" />
      <p className="content">{content}</p>
    </div>
  );
};
export default PostBox;
