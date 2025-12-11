import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, technologies, link }) {
    if(link === '') {
        return (
            <div className={styles.card}>
      <h2>{title}</h2>
      {image && <img src={image} alt={title} className={styles.projectImage} />}
      <p>{description}</p>
      <p><strong>Technologies:</strong> {technologies}</p>
      <a className={styles.link}>
        Details Available Personally
      </a>
    </div>
        )
    }
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Technologies:</strong> {technologies}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
