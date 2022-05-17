import React from "react";
import TechIcon from "./TechIcon";
import styles from "../styles/components/ProjectCard.module.css";

type ProjectProps = {
  post: {
    title: string;
    short: string;
    scope: string[];
    url?: string;
    description: string;
    images?: string[];
  };
  index: number;
};

const ProjectCard: React.FC<ProjectProps> = ({
  post: { title, short, scope, url, description, images },
  index,
}) => {
  return (
    <a href={url}>
      <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{short}</span>
        <br />
        <div className={styles["tech-container"]}>
          {scope.map((tech) => {
            return (
              <div className={styles["scope-item"]}>
                <TechIcon iconId={tech} />
              </div>
            );
          })}
        </div>
        <br />

        <span className={styles.description}>
          {description.split("\n").map((value, index) => {
            return (
              <span key={index}>
                {value}
                <br />
              </span>
            );
          })}
        </span>
      </div>
    </a>
  );
};
export default ProjectCard;
