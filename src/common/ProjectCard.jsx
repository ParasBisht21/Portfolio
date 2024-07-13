import React from 'react'

function ProjectCard({src,link,text1,des}) {
  return (
    <div>
      <a href={link} target='_blank'>
          <img className="hover" src={src} alt={'${text1}logo'} />
          <h3>{text1}</h3>
          <p>{des}</p>
        </a>
    </div>
  )
}

export default ProjectCard;
