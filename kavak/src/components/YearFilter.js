import React, {Fragment} from 'react';
import {Form} from 'react-bootstrap';

const YearFilter = () => {
     return (
          <Fragment>
               <Form.Label>Year</Form.Label>
               <Form.Control type="range" min="-10" max="10" placeholder="Input Year"/>
          </Fragment>
     );
}

export default YearFilter;