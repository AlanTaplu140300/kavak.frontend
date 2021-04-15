import React, {Fragment} from 'react';
import {Form, ToggleButton, ToggleButtonGroup, Col, Row, Container} from 'react-bootstrap';

const YearFilter = () => {
     return (
          <Fragment>
               <Container>
                    <br/>
                    <Form.Label>Año</Form.Label>
                    <Row>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2010</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2011</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2012</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                    </Row>
                    <br/>
                    <Row>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2013</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2014</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2015</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                    </Row>
                    <br/>
                    <Row>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2016</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2017</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2018</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                    </Row>
                    <br/>
                    <Row>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2019</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2020</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col md="1">
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton variant="outline-primary">2021</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col></Col>
                    </Row>
               </Container>
          </Fragment>
     );
}

export default YearFilter;