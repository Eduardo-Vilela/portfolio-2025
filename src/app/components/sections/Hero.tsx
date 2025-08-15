'use client';

import { PERSONAL_INFO } from '@/constants';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Container, Row, Col } from 'react-bootstrap';
import '@/styles/hero.css'
import { Button } from '../ui/Button';

function Hero(){
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <Container className='hero-container'>
      <Row>
        <Col lg={12}>
          <section className='hero-container-title'>
            <h1 className="" data-aos="fade-right">Eduardo Vilela</h1>
            <h2 className="outlined-text" data-aos="fade-left">FRONTEND DEVELOPER</h2>
            <div className='d-flex flex-column gap-2' data-aos="zoom-out-up">
              <p className='m-0'>I design beautifully simple things and i love what i do.</p>
              <p className='m-0'>Just simple like that!</p>
            </div>
            <Button variant='primary' data-aos="zoom-out-up">Let’s Talk</Button>
          </section>
        </Col>
      </Row>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </Container>
  );
}
export default Hero
