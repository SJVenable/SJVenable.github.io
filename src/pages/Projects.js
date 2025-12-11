import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  const projectData = [
    {
      title: "LLM Stack Overflow Judge",
      image: "public/images/favicon.jpg",
      description: "Research into positional bias of LLMs when ranking Stack Overflow answers.",
      technologies: "LLM-as-a-Judge, Python, Data Analytics",
      link: "https://github.com/SJVenable/Stack_Overflow_Judge"
    },
    {
      title: "TwistMC Project Descriptions",
      image: "/images/favicon.jpg",
      description: "A summary of some commissioned projects I've completed for the server",
      technologies: "Java, Spigot, Gradle",
      link: "https://github.com/SJVenable/TwistMC-Projects"
    },
    {
      title: "Othello AI Opponent",
      image: "/images/favicon.jpg",
      description: "A terminal interface to play othello against an AI opponent, which uses the minimax algorithm",
      technologies: "Java, Game-playing-AI",
      link: "https://github.com/SJVenable/Othello_Player"
    },
    {
      title: "Java Minecraft Plugin Example",
      image: "/images/favicon.jpg",
      description: "Mob Killer game - Example of my projects in Java, using the Spigot API to create Minecraft Plugins.",
      technologies: "Java, Spigot, Game Development",
      link: "https://github.com/SJVenable/AnimalKiller"
    },
    {
      title: "Databases and Interfaces Coursework",
      image: "/images/favicon.jpg",
      description: "Vehicle Database User Interface",
      technologies: "HTML, CSS, JS, Supabase",
      link: "https://github.com/SJVenable/Databases-CW",
    },
    {
      title: "Portfolio Website",
      image: "/images/favicon.jpg",
      description: "This portfolio website's code. A project to help me learn React, alongside HTML, CSS, JavaScript and showcase my projects",
      technologies: "React, CSS, JS",
      link: "https://github.com/SJVenable/SJVenable.github.io"
    },
    {
      title: "IBM Work Experience Project 2024",
      image: "/images/favicon.jpg",
      description: "Details available personally",
      technologies: "JavaScript, Graphing Software, Statistical Analysis",
      link: '',
    },
    {
      title: "Godot Game: Dodge the Creeps",
      image: "/images/favicon.jpg",
      description: "Basic 2D game tutorial on basics of Godot",
      technologies: "GDScript, Game Development",
      link: "https://github.com/SJVenable/GodotPracticeProject"
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
