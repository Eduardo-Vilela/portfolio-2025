'use client';

import { PERSONAL_INFO } from '@/constants';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Container, Row, Col } from 'react-bootstrap';
import '@/styles/hero.css'
import { Button } from '../ui/Button';
import { FaArrowRightLong } from 'react-icons/fa6';
const items = Array.from({ length: 25 });
function Hero(){
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <Container className='hero-container'>
      <Row>
        <Col lg={12}>
          <section className='hero-container-title'>
            <h1 className="" data-aos="fade-right">Eduardo Vilela</h1>
            <h2 className="outlined-text" data-aos="fade-left">FRONTEND DEVELOPER</h2>
            <div className='d-flex flex-column gap-2 mt-4' data-aos="zoom-out-up">
              <p className='m-0'>I design beautifully simple things and i love what i do.</p>
              <p className='m-0'>Just simple like that!</p>
            </div>
            <Button href="/contact" variant='primary' data-aos="zoom-out-up" className='mt-4'>Let’s Talk <FaArrowRightLong /></Button>
          </section>
        </Col>
      </Row>
      {/* <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </Container>
  );
}
export default Hero
