'use client';

import { PERSONAL_INFO } from '@/constants';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Container, Row, Col } from 'react-bootstrap';


export const Hero = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <Container style={{ backgroundColor: "red", height: "500vh" }}>
      <Row>
        <Col>
          <h1>Hero</h1>
        </Col>
      </Row>
    </Container>
  );
};
