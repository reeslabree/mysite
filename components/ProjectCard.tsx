import React from 'react';
import styles from '../styles/components/ProjectCard.module.css'

type ProjectProps = {
    post: {
        title: string,
        scope: string[],
        url?: string,
        description: string,
        images?: string[]
    },
    index: number
}

const ProjectCard: React.FC<ProjectProps> = ({
    post: {
        title, scope, url, description, images
    },
    index
}) => {
    return (
        <div>
            CARD CONTENT
        </div>
    )
} 
export default ProjectCard;