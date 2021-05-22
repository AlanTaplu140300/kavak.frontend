import React, {useEffect, useState} from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import SellForm from './SellForm'
import TestForm from './TestForm'


const Sell = () => {

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
          <Row>
               <hr/>
               <br/>
               <Col xs={4}></Col>
               <Col xs={4}>
                    <SellForm/>
               </Col>
               <Col xs={4}></Col>
          </Row>
     );
}

export default Sell;