"use client";
import React from 'react'
import '@/styles/skills.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image'

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const skills = [
  'github-icon', 
  'react', 
  'typescript-icon',
  'nextjs-icon', 
  'nodejs-icon-alt', 
  'javascript', 
  'html-5', 
  'css-3', 
  'bootstrap', 
  'tailwindcss-icon', 
  'figma', 
  'vue', 
  'docker', 
  'mongodb-icon', 
  'mysql-icon', 
  'firebase-icon', 
  'vercel', 
  'expo'
]
function Skills() {
  return (
    <div className='container-skills' id='habilidades'>
      <Container>
        <Row className='w-100 gap-2'>
          <Col lg={12} className='justify-content-center text-center my-3'>
              <h1>Mi especialización y habilidades clave</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid className='p-0 m-0'>
        <Col lg={12} className='w-100 d-flex flex-column justify-content-center align-items-center' style={{height: '250px'}}>
          {/* {SKILLS.map((skill) => (
            <HexagonoSkill key={skill.id} skill={skill}/>
          ))} */}
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            navigation={true}
            slidesPerView={'auto'}
            initialSlide={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              
              1024: {
              },
              1280: {
              },
              1536: {
              }
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="swiper-skill"
          >
            {skills.map((skill) => (
              <SwiperSlide key={skill} className='h-100 slide-skill'>
                <Image
                  src={`https://cdn.svglogos.dev/logos/${skill}.svg`}
                  alt={skill}
                  width={100}
                  height={100}
                  unoptimized
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Container>
    </div>
  )
}

export default Skills