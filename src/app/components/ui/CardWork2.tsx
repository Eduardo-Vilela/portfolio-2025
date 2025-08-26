import React from 'react';
import '@/styles/components/cardWork2.css';
import Image from 'next/image';
import type { Project } from '@/types';
import { BsArrowUpRight } from "react-icons/bs";
import { SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";
import { FaReact ,FaGithub, FaCss3Alt, FaSass } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from './Button';

interface CardWorkProps {
  project: Project;
}

function CardWork2({ project }: CardWorkProps) {
    return (
    <div className="custom-card" data-aos="zoom-in" >
        <div className='position-relative'>
            <Image src={project.imageUrl} alt='Icon-expo' className='img-project' width={850} height={512}/>
            <div className='stack-project'>
            {project.technologies.map((tech, index) => (
                <Button key={index} variant='secondary' href="/contact">
                {tech}
                </Button>
            ))}
            </div>
        </div>
        <div className='card-description'>
            <div className='card-description-text'>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
            <div>
                <Button
                    href={project.liveUrl ?? ""}
                    variant='secondary'
                >
                    <FaArrowRightLong />
                </Button>
            </div>
        </div>
    </div>
  );
}

export default CardWork2;
