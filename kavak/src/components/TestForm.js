import React, {Fragment} from 'react';
import {Form, Button} from 'react-bootstrap';
import YearFilter from './YearFilter';
import BrandAndModel from './BrandAndModel';

const TestForm = () => {
     return (
          <Fragment>
               <h2>Formulario de Venta Vehiculos</h2>
               <Form>
                    <Form.Group>
                         <BrandAndModel/>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label>Versión</Form.Label>
                         <Form.Control type="text" placeholder="Versión" />
                    </Form.Group>
                    <Form.Group>
                         <Form.Label>Kilometraje</Form.Label>
                         <Form.Control type="text" placeholder="Kilometraje" />
                    </Form.Group>
                    <Form.Group>
                         <Form.Label>Ubicación</Form.Label>
                         <Form.Control placeholder="Ubicación" />
                    </Form.Group>
                    <Form.Group>
                         <YearFilter/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                         Cotizar
                    </Button>
               </Form>
          </Fragment>
     );
}

export default TestForm;