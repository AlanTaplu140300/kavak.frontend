import React, {Fragment} from 'react';
import {Form, Button} from 'react-bootstrap';
import YearFilter from './YearFilter'

const TestForm = () => {
     return (
          <Fragment>
               <h1>Formulario de carros</h1>
               <Form>
                    <Form.Group controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control type="email" placeholder="Enter email" />
                         <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                         </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" placeholder="Password" />
                         </Form.Group>
                         <Form.Group controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group>
                         <YearFilter/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                         Submit
                    </Button>
               </Form>
          </Fragment>
     );
}

export default TestForm;