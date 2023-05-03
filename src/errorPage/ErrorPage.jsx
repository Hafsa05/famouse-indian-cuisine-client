import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaRegMeh, FaRegSadCry } from 'react-icons/fa';


const ErrorPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <FaRegMeh size={250} />
          <h1 className="mt-3">Error 404 - Page not found</h1>
          <Button variant="outline-info" href="/">Go back to home page</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default ErrorPage;
