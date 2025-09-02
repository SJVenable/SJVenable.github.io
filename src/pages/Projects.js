import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  const projectData = [
    {
      title: "IBM Software Engineer Intern",
      description: "12 month placement with IBM working in the CICS department",
      technologies: "Agentic AI, Python, Z/OS",
      link: "mailto:sj@venable.org.uk"
    },
    {
      title: "TwistMC Project Descriptions",
      description: "A summary of some commissioned projects I've completed for the server",
      technologies: "Java, Spigot, Gradle",
      link: "https://github.com/SJVenable/TwistMC-Projects"
    },
    {
      title: "IBM Work Experience Project",
      description: "Details available personally",
      technologies: "JavaScript, Graphing Software, Statistical Analysis",
      link: '',
    },
    {
      title: "Godot Game: Dodge the Creeps",
      description: "Basic 2D game tutorial on basics of Godot",
      technologies: "GDScript, Game Development",
      link: "https://github.com/SJVenable/GodotPracticeProject"
    },
    {
      title: "Java Minecraft Plugin Example",
      description: "Mob Killer game - Example of my projects in Java, using the Spigot API to create Minecraft Plugins.",
      technologies: "Java, Spigot, Game Development",
      link: "https://github.com/SJVenable/AnimalKiller"
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
