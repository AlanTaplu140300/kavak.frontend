import React, {Fragment} from 'react';
import {Form} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';


const Price = () => {

    return (
        <Fragment>
            <Form>
                <br/>
                <Form.Label>Precio</Form.Label>
                <Row>
                <Col md={2}>
                    <Form.Control 
                    type="number"
                    placeholder="Mínimo"
                    name="preciomin"
                    min="0"
                    />
                    <Form.Control.Feedback type="invalid">Por favor ingrese valores válidos.</Form.Control.Feedback>
                </Col>
                <Col md={2}>
                    <Form.Control 
                    type="number"
                    placeholder="Máximo"
                    name="preciomax"
                    min="0"
                    />
                    <Form.Control.Feedback type="invalid">Por favor ingrese valores válidos.</Form.Control.Feedback>
                </Col>
                </Row>
            </Form>
            
        </Fragment>
    );

};

export default Price;