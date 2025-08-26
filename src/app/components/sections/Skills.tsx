import React from 'react'
import '@/styles/skills.css'
import { Col, Container, Row } from 'react-bootstrap'
import HexagonoSkill from '../ui/HexagonoSkill'
import { SKILLS } from '@/constants'

function Skills() {
  return (
    <div className='container-skills'>
       <Container>
        <Row className='w-100 gap-2'>
            <Col className='d-flex flex-column justify-content-center'>
                <p>What I Do !</p>
                <h1>My specialization And key skills</h1>
            </Col>
            <Col className='w-100 d-flex flex-wrap justify-content-center gap-3' >
                {SKILLS.map((skill) => (
                  <HexagonoSkill key={skill.id} skill={skill}/>
                ))}
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Skills