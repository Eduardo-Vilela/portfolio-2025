'use client';

import { PERSONAL_INFO } from '@/constants';
import { Container } from 'react-bootstrap';
import '@/styles/hero.css'
import { Button } from '../ui/Button';
import { FaArrowRightLong } from 'react-icons/fa6';
import Ballpit from '../../../../ReactBits/Ballpit/Ballpit';
function Hero(){

  return (
    <Container fluid className='container-hero' id='inicio'>
      <div className='hero-container'>
        <section className='hero-container-title'>
          <h1 className="" data-aos="fade-up" data-aos-anchor-placement="top-bottom">{PERSONAL_INFO.name}</h1>
          <h2 className="outlined-text" data-aos="fade-up" data-aos-anchor-placement="top-bottom">{PERSONAL_INFO.title}</h2>
          <div className='d-flex flex-column gap-2 mt-4' data-aos="zoom-out-up">
            <p className='m-0' data-aos="fade-up" data-aos-anchor-placement="top-bottom">{PERSONAL_INFO.subtitle}</p>
            <p className='m-0' data-aos="fade-up" data-aos-anchor-placement="top-bottom">{PERSONAL_INFO.subtitle2}</p>
          </div>
          <Button data-aos="fade-up" data-aos-anchor-placement="top-bottom" href="/contact" variant='primary' className='mt-4'>{PERSONAL_INFO.buttonText}<FaArrowRightLong /></Button>
        </section>
        <Ballpit
          count={100}
          gravity={0.1}
          friction={1}
          wallBounce={0.95}
          followCursor={false}

        />
      </div>
    </Container>
  );
}
export default Hero
