import React from 'react'
import { WORKS } from '@/constants/index'
import { Col, Container, Row } from 'react-bootstrap'
import '@/styles/works.css'
import CardWork from '../ui/CardWork'

function Works() {
  return (
    <Container className='works-container my-4'>
        <Row>
            <Col lg={12} className='works-box-top'>
                <section>
                    <h1>Selected works</h1>
                </section>
                <section className='d-flex flex-wrap gap-4'>
                    {WORKS.map((work) => (
                        <CardWork key={work.id} project={work}/>
                    ))}
                </section>
            </Col>
        </Row>
    </Container>
  )
}

export default Works