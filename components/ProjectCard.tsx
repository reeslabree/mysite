import React from "react";
import TechIcon from "./TechIcon";
import styles from "../styles/components/ProjectCard.module.css";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";

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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>
        {open ? (
          <HiChevronDoubleUp className={styles.chevron} onClick={handleClick} />
        ) : (
          <HiChevronDoubleDown
            className={styles.chevron}
            onClick={handleClick}
          />
        )}
        <a href={url}>{title} </a>
      </span>

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

      <span
        className={
          open ? styles["description-open"] : styles["description-close"]
        }
      >
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
  );
};
export default ProjectCard;
