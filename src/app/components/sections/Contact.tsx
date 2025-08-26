import React from 'react'
import '@/styles/contact.css'
import { Col, Container, Row } from 'react-bootstrap'

function Contact() {
  return (
    <Container className='container-contact'>
      <Row className='w-100 h-100'>
        <Col lg={12} className='col-contact'>
          <h2>Contact</h2>
          <h1>Let’s rock with me</h1>
          <div className='box-info'>
            <p>(+54) 221 - 6776051</p>
            <p>eduardovilela22@gmail.com</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact