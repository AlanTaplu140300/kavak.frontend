import React, {Fragment} from 'react';
import {Form, Button, Col, Row, Container} from 'react-bootstrap';

const YearFilter = () => {
     return (
          <Fragment>
               <Form.Label>Year</Form.Label>
               <Container>
                    <Row>
                         <Col>1 of 3</Col>
                         <Col>2 of 3</Col>
                         <Col>3 of 3</Col>
                    </Row>
                    <Row>
                         <Col>1 of 3</Col>
                         <Col>2 of 3</Col>
                         <Col>3 of 3</Col>
                    </Row>
                    <Row>
                         <Col>1 of 3</Col>
                         <Col>2 of 3</Col>
                         <Col>3 of 3</Col>
                    </Row>
                    <Row>
                         <Col>1 of 3</Col>
                         <Col>2 of 3</Col>
                         <Col></Col>
                    </Row>
               </Container>
          </Fragment>
     );
}

export default YearFilter;