import React, {Fragment} from 'react';
import {Form, Button} from 'react-bootstrap';

import { Formik } from "formik";
import * as yup from "yup";

const { FMK } = Formik;

const schema = yup.object().shape({
  brand: yup.string().required(),
  carmodel: yup.string().required()
});

const BrandAndModel = () => {
     return (
          
          <Fragment>
               <Formik
               validationSchema={schema}
               onSubmit={console.log}
               initialValues={{
               brand: 'Versión',
               carmodel: 'Modelo'
               }}>
               {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    isValid,
                    errors,
               }) => (
               <Form onSubmit={handleSubmit}>
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
               </Form>
          )}
          </Formik>
          </Fragment>
     );
}

export default BrandAndModel;