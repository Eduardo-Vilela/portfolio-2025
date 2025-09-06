import React from 'react'
import '@/styles/contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import { PERSONAL_INFO } from '@/constants'
import SocialLinks from '../ui/SocialLinks'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'

function Contact() {
  return (
    <Container fluid className='container-contact' id='contacto'>
      <Row className='py-5 justify-content-center'>
        <Col lg={12} className='col-contact'>
          <h1 className='text-white mb-5'>Contacto</h1>
        </Col>
        <Col sm={12} md={12} lg={'auto'} xl={3} className='my-4 text-xl-end text-sm-center text-md-center'>
          <p className='text-white d-flex flex-row justify-content-center align-items-center'>
            <FaPhoneAlt style={{marginRight: '8px'}}/>
            {PERSONAL_INFO.phone}
          </p>
        </Col>
        <Col sm={12} md={12} lg={'auto'} xl={3} className='my-4 text-center'>
          <p className='text-white d-flex flex-row justify-content-center align-items-center'><BiLogoGmail style={{marginRight: '8px'}} color='white' />{PERSONAL_INFO.email}</p>
        </Col>
        <Col sm={12} md={12} lg={'auto'} xl={3} className='my-4 text-xl-start text-sm-center text-md-center'>
          <p className='text-white d-flex flex-row justify-content-center align-items-center'><FaMapMarkerAlt style={{marginRight: '8px'}} color='white' />{PERSONAL_INFO.location}</p>
        </Col>
        <Col lg={12} className='mt-4 d-flex flex-row justify-content-center'>
          <SocialLinks className='p-0 border-0'/>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact