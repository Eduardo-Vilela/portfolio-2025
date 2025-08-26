import React from 'react';
import '@/styles/components/cardWork.css';
import Image from 'next/image';
import type { Project } from '@/types';
import { BsArrowUpRight } from "react-icons/bs";
import { SiNextdotjs, SiTypescript, SiRedux } from "react-icons/si";
import { FaReact ,FaGithub, FaCss3Alt, FaSass } from "react-icons/fa";
interface CardWorkProps {
  project: Project;
}

function CardWork({ project }: CardWorkProps) {
  return (
    <div className="card">
      <div className='card-img-work'>

      </div>
      <div className="number">
        <p className="text"><BsArrowUpRight /></p>
      </div>
      <p className="heading m-0">Solventa Fintech</p>
      <p className="content m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga
        adipisicing elit
      </p>
      <div className='card-box-links'>
        {/* <div className='card-link'>
        </div> */}
          <SiNextdotjs fontSize={30} />
          <FaReact fontSize={30} color='#00FFFF'/>
          <FaGithub  fontSize={30}/>
          <SiTypescript  fontSize={30} color='#007ACC'/>
          <SiRedux color='#764ABC' fontSize={30}/>
          <FaCss3Alt fontSize={30} color='#264DE4'/>
          <FaSass color='#FF00FF' fontSize={30} />
          <Image src={'/images/expo.svg'} alt='Icon-expo' width={30} height={30}/>
      </div>
  </div>
  
  );
}

export default CardWork;
