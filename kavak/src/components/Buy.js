import React, {Fragment} from 'react';
import {Row, Col} from 'react-bootstrap';
import $ from 'jquery';

const Buy = () => {
     fetch('http://127.0.0.1:8000/api/car/')
     .then(response => response.json())
     .then(data => console.log(data));
     return (
          <Fragment>
               <Row>
                    <Col>Soy uno</Col>
                    <Col>Soy dos</Col>
               </Row>
          </Fragment>
     );
}

export default Buy;