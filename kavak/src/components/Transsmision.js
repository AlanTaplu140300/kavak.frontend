import React, {Fragment} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';


const Transsmision = () => {
     return (
          
          <Fragment>
               <br/>
              <Col md="3">
                <Form.Label>Transmición</Form.Label>
                <Form.Control as="select">
                    <option>Todas</option>
                    <option>Automática</option>
                    <option>Manual</option>
                    </Form.Control>
              </Col>
          </Fragment>
     );
}

export default Transsmision;