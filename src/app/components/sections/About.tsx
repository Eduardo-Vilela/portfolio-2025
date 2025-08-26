import React from 'react'
import '@/styles/about.css'
import { Col, Container, Row } from 'react-bootstrap'
import { PERSONAL_ABOUT } from '@/constants'
import { Button } from '../ui/Button'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'

function About() {
  return (
    <Container className='about-container'>
        <Row>
            <Col lg={7} className='about-box-left py-4' data-aos="fade-up" data-aos-duration="3000">
                <h1>{PERSONAL_ABOUT.title}</h1>
                <p className='fw-bold'>{PERSONAL_ABOUT.context1}</p>
                <p>{PERSONAL_ABOUT.context2}</p>
                <Button href="/contact" variant='primary'>Let’s Talk <FaArrowRightLong /></Button>
            </Col>
            <Col lg={5} className='about-box-right py-4' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <Image src={PERSONAL_ABOUT.aboutImage} alt='about-img' width={560} height={400} style={{ width: '100%', height: 'auto' }}/>
            </Col>
        </Row>
    </Container>
  )
}

export default About