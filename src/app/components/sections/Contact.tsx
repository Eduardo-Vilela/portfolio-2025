import React from 'react'
import '@/styles/contact.css'
import { Col, Container, Row } from 'react-bootstrap'

function Contact() {
  return (
    <Container fluid className='container-contact'>
      <Row className='py-5'>
        <Col lg={12} className='col-contact'>
          <h2 className='text-white'>Contact</h2>
          <h1 className='text-white'>Let’s rock with me</h1>
          <div className='box-info'>
            <p className='text-white'>(+54) 221 - 6776051</p>
            <p className='text-white'>eduardovilela22@gmail.com</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact