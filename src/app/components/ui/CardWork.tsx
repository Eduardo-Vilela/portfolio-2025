import React from 'react';
import type { JSX } from 'react';
import '@/styles/components/cardWork.css';
import Image from 'next/image';
import type { Project } from '@/types';
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { Button } from './Button';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { FaBootstrap, FaLaravel, FaPhp, FaVuejs, FaWordpress } from 'react-icons/fa6';
import { DiJqueryLogo, DiMysql } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

interface CardWorkProps {
  project: Project;
}

const techIcons: Record<string, JSX.Element> = {
    React: <FaReact />,
    "React Native": <FaReact />,
    Node: <FaNodeJs />,
    Html: <FaHtml5 />,
    Css: <FaCss3Alt />,
    JavaScript: <FaJsSquare />,
    TypeScript: <SiTypescript />,
    Next: <RiNextjsFill />,
    Wordpress: <FaWordpress />,
    Vue: <FaVuejs />,
    Laravel: <FaLaravel />,
    Php: <FaPhp />,
    Jquery: <DiJqueryLogo />,
    MySql: <DiMysql fontSize={23} />,
    Tailwind: <RiTailwindCssFill />,
    Bootstrap: <FaBootstrap />,
    Expo: <Image src="/images/expo-icon.svg" alt="Icon-expo" width={15} height={15} />
}

function CardWork2({ project }: CardWorkProps) {
    return (
    <div className="custom-card" data-aos="zoom-in" >
        <div className='position-relative'>
          <div className='img-project-wrapper'>
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className='img-project'
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className='card-description'>
            <div className='d-flex flex-column'>
                <div className='card-description-text'>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
                <div className='stack-project'>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className='px-1 d-flex align-items-center gap-1'>
                        {techIcons[tech] ?? null}
                        <span>{tech}</span>
                      </span>
                    ))}
                </div>
            </div>
            <div className='card-description-actions'>
                <Button
                    href={project.liveUrl ?? ""}
                    variant='primary'
                    className='px-2 py-2 mr-2'
                >
                    <FaGithub fontSize={20}/>
                </Button>
                <Button
                    href={project.liveUrl ?? ""}
                    variant='primary'
                    className='px-2 py-2'
                >
                    <LiaExternalLinkAltSolid fontSize={20}/>
                </Button>
            </div>
        </div>
    </div>
  );
}

export default CardWork2;
