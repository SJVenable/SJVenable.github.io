import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, technologies, link }) {
    if(link.contains("mailto") {
        return (
            <div className={styles.card}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p><strong>Technologies:</strong> {technologies}</p>
                <a href={link} className={styles.link}>
                    Details available personally
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
