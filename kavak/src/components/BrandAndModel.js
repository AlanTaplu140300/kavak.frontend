import React, {Fragment} from 'react';
import {Form, Button,Col} from 'react-bootstrap';

const BrandAndModel = () => {
     return (
          
          <Fragment>
               <Col md={3}>
                    <Form>
                         <br/>
                         <Form.Label>Marca</Form.Label>
                         <Form.Control type="text"
                         placeholder="Marca"
                         name="brand"
                         />
                         <Form.Control.Feedback type="invalid">Por favor ingrese una marca válida.</Form.Control.Feedback>
                         <br/>
                         <Form.Label>Modelo</Form.Label>
                         <Form.Control type="text"
                         placeholder="Modelo"
                         name="carmodel"
                         />
                         <Form.Control.Feedback type="invalid">Por favor ingrese un modelo válido.</Form.Control.Feedback>
                    </Form>
               </Col>
          </Fragment>
     );
}

export default BrandAndModel;