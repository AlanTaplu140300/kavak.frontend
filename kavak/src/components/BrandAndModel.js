import React, {Fragment} from 'react';
import {Form, Button} from 'react-bootstrap';

const BrandAndModel = () => {
     return (
          <Fragment>
               <Form>
                    <Form.Label>Marca</Form.Label>
                    <Form.Control type="text" placeholder="Marca" />
                    <br/>
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control type="text" placeholder="Modelo" />
               </Form>
          </Fragment>
     );
}

export default BrandAndModel;