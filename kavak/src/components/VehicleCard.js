import React from 'react';
import Card from 'react-bootstrap/Card';
import {Col, Button} from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';
import './components-css/VehicleCard.css';

const VehicleCard = ({key, car}) => {

    var mensualidad = Math.round((parseFloat(car.price) / 12)*100)/100; 

    return (
        <Col xs={4}>
            <Card>
                <Card.Body>
                    <Card.Link className="text-right" style={{ display: 'block' }} ><Heart color="white" /></Card.Link>
                    <Card.Title>${car.price}</Card.Title>
                    <Card.Text>{car.name}<br/>
                        <span className="special-size">{car.year} | {car.transmision}<br/>{car.location}</span>
                    </Card.Text>
                    <Card.Text className="text-right" ><span className="special-size">Desde ${mensualidad} mes</span></Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default VehicleCard;
/**
 * var price = '1,000,000';
    var product_name = 'Tsuru Tuneado Plus X 3000 S';
    var year = '2050';
    var transmission = 'Manual';
    var url = 'https://pbs.twimg.com/media/DMhn0TcUEAANIp5.jpg';
    var location = 'Tlaxcala';
    var monthly = '3,000';

 * 
 */