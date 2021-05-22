import React, {Fragment, useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import VehicleCard from './VehicleCard';

const BuyCars = ({carros}) => {
     return (
          <Row>
               {carros.map(carro => (
                    <VehicleCard
                         key={carro.id}
                         car={carro}
                    />
               ))}
          </Row>
     );
}

export default BuyCars;