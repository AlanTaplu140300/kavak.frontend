import React, {useEffect, useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import Axios from 'axios';

const SellForm = () => {
     const url = "http://127.0.0.1:8000/api/car/1/add-car/"
     const [newcar, guardarNewCar] = useState({
          transmission: "",
          model_type: "",
          traction: "",
          fuel: "",
          passengers: "",
          h_power: "",
          engine: "",
          color: "",
          brand: "",
          image: "",
          car_model: "",
          name: "",
          year: "",
          status: "",
          city: "",
          location: "",
          km: "",
          price: "",
     })

     function submit(e){
          e.preventDefault();
          Axios.post(url, {
               transmision: newcar.transmission,
               model_type: newcar.model_type,
               traction: newcar.traction,
               fuel: newcar.fuel,
               passengers: newcar.passengers,
               h_power: newcar.h_power,
               engine: newcar.engine,
               color: newcar.color,
               image: newcar.image[0],
               brand: newcar.brand,
               car_model: newcar.car_model,
               name: newcar.name,
               year: newcar.year,
               status: newcar.status,
               city: newcar.city,
               location: newcar.location,
               km: newcar.km,
               price: newcar.price,
          })

     }

     function handle(e) {
          const newdata = { ...newcar}
          if(e.target.id !== "image"){
               newdata[e.target.id] = e.target.value
          }
          else {
               newdata['image'] = e.target.files
          }
          guardarNewCar(newdata)
          console.log(newdata)
          }

     return (
          <Form onSubmit={(e) => submit(e)}>
               <Form.Group>
                    <Form.Control onChange={(e)=>handle(e)} id="transmission" type="text" placeholder="Transmición"/>
                    <Form.Control onChange={(e)=>handle(e)} id="car_model" type="text" placeholder="Modelo del Caro"/>
                    <Form.Control onChange={(e)=>handle(e)} id="brand"type="text" placeholder="Marca"/>
                    <Form.Control onChange={(e)=>handle(e)} id="model_type" type="text" placeholder="Versión"/>
                    <Form.Control onChange={(e)=>handle(e)} id="traction" type="text" placeholder="Tracción"/>
                    <Form.Control onChange={(e)=>handle(e)} id="fuel" type="text" placeholder="Combustible"/>
                    <Form.Control onChange={(e)=>handle(e)} id="passengers" type="text" placeholder="Pasajeros"/>
                    <Form.Control onChange={(e)=>handle(e)} id="h_power" type="text" placeholder="Caballos de fuerza"/>
                    <Form.Control onChange={(e)=>handle(e)} id="engine" type="text" placeholder="Motor"/>
                    <Form.Control onChange={(e)=>handle(e)} id="color" type="text" placeholder="Color"/>
                    <Form.Control onChange={(e)=>handle(e)} id="name" type="text" placeholder="Nombre"/>
                    <Form.Control onChange={(e)=>handle(e)} id="year" type="text" placeholder="Año"/>
                    <Form.Control onChange={(e)=>handle(e)} id="status" type="text" placeholder="Estatus"/>
                    <Form.Control onChange={(e)=>handle(e)} id="city" type="text" placeholder="Ciudad"/>
                    <Form.Control onChange={(e)=>handle(e)} id="location" type="text" placeholder="Locación"/>
                    <Form.Control onChange={(e)=>handle(e)} id="km" type="text" placeholder="Km"/>
                    <Form.Control onChange={(e)=>handle(e)} id="price" type="text" placeholder="Precio"/>
                    <Form.File onChange={(e)=>handle(e)} id="image" placeholder="image"/>
                    <Button variant="primary" type="submit">
                         Enviar
                    </Button>
               </Form.Group>
          </Form>
     );
}

export default SellForm;