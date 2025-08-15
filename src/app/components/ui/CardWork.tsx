import React from 'react';
import '@/styles/components/cardWork.css';
import { Col } from 'react-bootstrap';
import Image from 'next/image';
import type { Project } from '@/types';

interface CardWorkProps {
  project: Project;
}

function CardWork({ project }: CardWorkProps) {
  return (
    // <Col className='card-work-container'>
    //   <div className='card-work-box'>
    //     <Image
    //       src={project.imageUrl}
    //       alt={project.title}
    //       width={400}
    //       height={300}
    //       style={{ width: '100%', height: 'auto' }}
    //     />
    //     <div className='technologies'>
    //       {project.technologies.map((tech) => (
    //         <span key={tech} className='tech-badge'>
    //           {tech}
    //         </span>
    //       ))}
    //     </div>
    //   </div>
    // </Col>
    <div className="card">
    <div className="number">
      <p className="text">02</p>
    </div>
    <p className="heading">UI / UX Creative Desing</p>
    <p className="content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
      adipisicing elit
    </p>
  </div>
  
  );
}

export default CardWork;
