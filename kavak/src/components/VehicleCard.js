import React from 'react';
import {Card, Button} from 'react-bootstrap'

const VehicleCard = () => {
     return (
          <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src="https://sites.google.com/site/imagenesdecarrosgratis/_/rsrc/1421516636272/home/carros-deportivos-lamborghini-aventador-tron_aventador.jpg" />
               <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                         Some quick example text to build on the card title and make up the bulk of
                         the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
               </Card.Body>
          </Card>
     );
}
export default VehicleCard;