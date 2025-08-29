'use client'
import React from 'react'
import { WORKS } from '@/constants/index'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import '@/styles/works.css'
import { Button } from '../ui/Button'
import CardWork2 from '../ui/CardWork'
import { PiDesktopTowerThin } from 'react-icons/pi'

function Works() {


  return (
    <Container className='works-container my-4' id='portfolio'>
        <Row>
            <Col lg={12} className='works-box-top'>
                <section className=''>
                    <h1>Portfolio</h1>
                </section>
                <section className='works-container-cards'>
                    <Row>
                        <Col lg={12}>
                            <Tabs
                            defaultActiveKey="experiencia"
                            id="portfolio-tab-example"
                            className="w-100 "
                            >
                                <Tab eventKey="experiencia" title={<><PiDesktopTowerThin fontSize={25} style={{marginRight: '5px'}}/><span>Experiencia</span></>}>
                                    {WORKS.map((work) => (
                                        <CardWork2 key={work.id} project={work} />
                                    ))}
                                </Tab>
                                <Tab eventKey="personales" title={<><PiDesktopTowerThin fontSize={25} style={{marginRight: '5px'}}/><span>Personales</span></>}>
                                    {/* {WORKS.map((work) => (
                                        <CardWork2 key={work.id} project={work} />
                                    ))} */}
                                    <div className='d-flex flex-row justify-content-center mt-5' style={{width: '1300px',height: '80vh'}}>
                                        Proximamente
                                    </div>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </section>
                {/* <div className='w-100 d-flex flex-row justify-content-center mt-5'>
                    <Button href="/contact" className=''>Ver todos</Button>
                </div> */}
            </Col>
        </Row>
    </Container>
  )
}

export default Works