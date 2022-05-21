import { NextSeo } from "next-seo";
import React from "react";
import ProjectWrapper from "../components/ProjectWrapper";

const Projects = () => {
  return (
    <>
    <NextSeo 
      title='reeslabree.com | Projects'
    />
    <div style={{marginTop: '2rem'}}>
      <ProjectWrapper />
    </div>
    </>
  );
};

export default Projects;
