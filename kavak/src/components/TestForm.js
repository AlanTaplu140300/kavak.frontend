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
                    <Form.Group controlId="">
                         <Form.Label>Año</Form.Label>
                         <Form.Control as="select">
                              <option value="2010">2010</option>
                              <option value="2011">2011</option>
                              <option value="2012">2012</option>
                              <option value="2013">2013</option>
                              <option value="2014">2014</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                         </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="">
                         <Form.Label>Color</Form.Label>
                         <Form.Control as="select">
                              <option value="Negro">Negro</option>
                              <option value="Blanco">Blanco</option>
                              <option value="Rojo">Rojo</option>
                              <option value="Amarillo">Amarillo</option>
                              <option value="Gris">Gris</option>
                              <option value="Azul">Azul</option>
                              <option value="Cafe">Cafe</option>
                              <option value="Verde">Verde</option>
                              <option value="Plateado">Plateado</option>
                              <option value="Dorado">Dorado</option>
                              <option value="Otro">Otro</option>
                         </Form.Control>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label>Kilometraje</Form.Label>
                         <Form.Control type="text" placeholder="Kilometraje" />
                    </Form.Group>
                    <Form.Group>
                         <Form.Label>Ubicación</Form.Label>
                         <Form.Control placeholder="Ubicación" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                         Cotizar
                    </Button>
               </Form>
          </Fragment>
     );
}

export default TestForm;