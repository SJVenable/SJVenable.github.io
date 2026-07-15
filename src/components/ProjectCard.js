import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, technologies, link }) {
  if (link === '') {
    return (
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardTech}><strong>Technologies:</strong> {technologies}</p>
        <span className={styles.link}>Details available personally</span>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <p className={styles.cardTech}><strong>Technologies:</strong> {technologies}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
