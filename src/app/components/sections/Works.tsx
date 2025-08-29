import React from 'react'
import { WORKS } from '@/constants/index'
import { Col, Container, Row } from 'react-bootstrap'
import '@/styles/works.css'
import CardWork from '../ui/CardWork'
import CardWork2 from '../ui/CardWork2'
import { Button } from '../ui/Button'
import { FaArrowRightLong } from 'react-icons/fa6'

function Works() {


  return (
    <Container className='works-container my-4' id='portfolio'>
        <Row>
            <Col lg={12} className='works-box-top'>
                <section className=''>
                    <h1>Portfolio</h1>
                </section>
                <section className='works-container-cards'>
                    {WORKS.map((work) => (
                        <CardWork2 key={work.id} project={work} />
                    ))}
                </section>
                <div className='w-100 d-flex flex-row justify-content-center mt-5'>
                    <Button href="/contact" className=''>Ver todos</Button>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Works