import React, {Fragment} from 'react';
import {Form, ToggleButton, ToggleButtonGroup, Col, Row, Container} from 'react-bootstrap';

const YearFilter = () => {
     return (
          <Fragment>
               <Form.Label>Año</Form.Label>
               <Container>
                    <Row>
                    
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2010</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2011</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2012</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                    </Row>
                    <br/>
                    <Row>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2013</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2014</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2015</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                    </Row>
                    <br/>
                    <Row>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2016</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2017</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2018</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                    </Row>
                    <br/>
                    <Row>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2019</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col>
                              <ToggleButtonGroup type="checkbox">
                                   <ToggleButton>2020</ToggleButton>
                              </ToggleButtonGroup>
                         </Col>
                         <Col></Col>
                    </Row>
               </Container>
          </Fragment>
     );
}

export default YearFilter;