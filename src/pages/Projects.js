import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  const projectData = [
    {
      title: "Othello Player",
      description: "An AI opponent for the board game Othello with 2 difficulty levels.",
      technologies: "C#, Minimax, Console UI",
      link: "https://github.com/SJVenable/OthelloPlayer",
    },
    {
      title: "IBM Work Experience Project",
      description: "Details available personally",
      technologies: "JavaScript, Graphing Software, Statistical Analysis",
      link: '',
    },
    {
      title: "Databases and Interfaces Coursework",
      description: "Vehicle Database User Interface",
      technologies: "HTML, CSS, JS, Supabase",
      link: "https://github.com/SJVenable/Databases-CW",
    },
     
  ];

  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
