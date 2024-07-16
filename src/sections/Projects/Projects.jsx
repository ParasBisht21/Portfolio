import React from 'react';
import styles from './ProjectStyles.module.css';
import trackerImg from '../../assets/RealTime_Tracker.jpg';
import one from '../../assets/one.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={trackerImg} 
          link='https://github.com/ParasBisht21/RealTime_Tracker' 
          text1="Real Time Tracker" 
          des="Multi Device Location Tracker" 
        />
        <ProjectCard 
          src={one} 
          link="https://github.com/ParasBisht21/OneHealth" 
          text1="One Health" 
          des="Unified Health Interface for All" 
        />
      </div>
    </section>
  );
}

export default Projects;
