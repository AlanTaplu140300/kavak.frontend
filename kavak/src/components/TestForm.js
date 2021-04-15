import React, {Fragment} from 'react';
import {Form, Button} from 'react-bootstrap';
import YearFilter from './YearFilter';
import BrandAndModel from './BrandAndModel';

import { Formik } from "formik";
import * as yup from "yup";

const { FMK } = Formik;

const schema = yup.object().shape({
  name: yup.string().required(),
  year: yup.string().required(),
  color: yup.string().required(),
  km: yup.string().required(),
  location: yup.string().required(),
  brand: yup.string().required(),
  carmodel: yup.string().required()
});

const TestForm = () => {
     return (
          <Fragment>
               <h2>Formulario de Venta Vehiculos</h2>
               <Formik
               validationSchema={schema}
               onSubmit={console.log}
               initialValues={{
               name: 'Versión',
               year: '2010',
               color: 'Negro',
               km: '0',
               location: 'Ubicación',
               brand: 'Marca',
               carmodel: 'Modelo'
               }}>
               {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    isSubmitting,
                    values,
                    touched,
                    isValid,
                    isInvalid,
                    errors,
               }) => (
               <Form onSubmit={handleSubmit}>
                    <Form.Group>
                         <Form.Label>Marca</Form.Label>
                         <Form.Control type="text"
                         placeholder="Marca"
                         name="brand"
                         value={values.brand}
                         onChange={handleChange}
                         isInvalid={!!errors.brand}
                         />
                         <Form.Control.Feedback type="invalid">Por favor ingrese una marca válida.</Form.Control.Feedback>
                         <br/>
                         <Form.Label>Modelo</Form.Label>
                         <Form.Control type="text"
                         placeholder="Modelo"
                         name="carmodel"
                         value={values.carmodel}
                         onChange={handleChange}
                         isInvalid={!!errors.carmodel}
                         />
                         <Form.Control.Feedback type="invalid">Por favor ingrese un modelo válido.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label>Versión</Form.Label>
                         <Form.Control 
                         type="text"
                         placeholder="Versión"
                         name="name"
                         value={values.name}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         isInvalid={!!errors.name}
                         />
                    <Form.Control.Feedback type="invalid">Por favor ingrese una versión válida.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="">
                         <Form.Label>Año</Form.Label>
                         <Form.Control as="select" 
                         type="number"
                         placeholder="Año"
                         name="year"
                         value={values.year}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         isInvalid={!!errors.year}
                         >
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
                         <Form.Control.Feedback type="invalid">Por favor ingrese un año válido.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="">
                         <Form.Label>Color</Form.Label>
                         <Form.Control as="select" 
                         type="text"
                         placeholder="Color"
                         name="color"
                         value={values.color}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         isInvalid={!!errors.color}
                         >
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
                         <Form.Control.Feedback type="invalid">Por favor ingrese un color válido.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label>Kilometraje</Form.Label>
                         <Form.Control 
                         type="number"
                         placeholder="Kilometraje"
                         name="km"
                         min="0"
                         value={values.km}
                         onChange={handleChange}
                         onBlur={handleBlur}
                         isInvalid={!!errors.km}
                         />
                         <Form.Control.Feedback type="invalid">Por favor ingrese valores válidos.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                         <Form.Label>Ubicación</Form.Label>
                         <Form.Control
                         type="text"
                         placeholder="Ubicación"
                         name="location"
                         value={values.location}
                         onChange={handleChange}
                         onBlur={handleBlur} 
                         isInvalid={!!errors.location}
                         />
                         <Form.Control.Feedback type="invalid">Por favor ingrese una ubicación válido.</Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                         Cotizar
                    </Button>
               </Form>
               )}
               </Formik>
          </Fragment>
     );
}

export default TestForm;