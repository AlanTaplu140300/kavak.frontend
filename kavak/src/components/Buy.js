import React, {Fragment, useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import BuyCars from './BuyCars';

const Buy = () => {

     const [carros, guardarCarros] = useState([])
     var filtro = "";
     useEffect(()=>{
          const consultarApi = async () => {
               const url = `http://127.0.0.1:8000/api/car/1/get-cars/`;
               const respuesta = await fetch(url);
               const autos = await respuesta.json();
               guardarCarros(autos)
          }
          consultarApi() 
     },[filtro]);

     return (
          <Fragment>
               <Row>
                    <Col xs={3}>Filtros</Col>

                    <Col xs={9}>
                         <BuyCars
                              carros={carros}
                         />
                    </Col>
               </Row>
          </Fragment>
     );
}

export default Buy;