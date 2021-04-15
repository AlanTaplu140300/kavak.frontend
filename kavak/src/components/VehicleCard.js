import React from 'react';
import Card from 'react-bootstrap/Card';
import {Col} from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';
import './components-css/VehicleCard.css';

const VehicleCard = () => {
    var price = '1,000,000';
    var product_name = 'Tsuru Tuneado Plus X 3000 S';
    var year = '2050';
    var transmission = 'Manual';
    var url = 'https://pbs.twimg.com/media/DMhn0TcUEAANIp5.jpg';
    var location = 'Tlaxcala';
    var monthly = '3,000';

    return ( 
        <Card className="vehicle_card" style={{ width: '18rem', color: 'white', backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${url})` }}>
            <Card.Body>
                <Card.Link className="text-right" style={{ display: 'block' }} ><Heart color="white" /></Card.Link>
                <Card.Title>${price}</Card.Title>
                <Card.Text>{product_name}<br/>
                <span className="special-size">{year} | {transmission}<br/>
                {location}</span></Card.Text>
                <Card.Text className="text-right" ><span className="special-size">Desde ${monthly} mes</span></Card.Text>
            </Card.Body>
        </Card>
    );
}

export default VehicleCard;