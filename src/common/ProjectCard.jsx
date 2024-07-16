import React from 'react';
import { CardContainer, CardBody, CardItem } from '../sections/Projects/HoverEffectComponents';
import styles from '../sections/Projects/ProjectStyles.module.css';

function ProjectCard({ src, link, text1, des }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
      <CardContainer className={styles.card}>
        <CardBody>
          <CardItem translateZ={30}>
            <img className={styles.image} src={src} alt={`${text1} logo`} />
          </CardItem>
          <CardItem translateZ={20}>
            <div className={styles.textContainer}>
              <h3>{text1}</h3>
              <p>{des}</p>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </a>
  );
}

export default ProjectCard;
