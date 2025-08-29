import React from 'react'
import '@/styles/contact.css'
import { Col, Container, Row } from 'react-bootstrap'
import { PERSONAL_INFO } from '@/constants'

function Contact() {
  return (
    <Container fluid className='container-contact' id='contacto'>
      <Row className='py-5'>
        <Col lg={12} className='col-contact'>
          <h2 className='text-white'>Contacto</h2>
          <h1 className='text-white'>Let’s rock with me</h1>
          <div className='box-info'>
            <p className='text-white'>{PERSONAL_INFO.phone}</p>
            <p className='text-white'>{PERSONAL_INFO.email}</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact