import './App.css';
import VehicleCard from './components/VehicleCard';
import TestForm from './components/TestForm';
import YearFilter from './components/YearFilter';
import Header from './components/Header';
import {Container, Row, Col} from 'react-bootstrap';
import Transsmision from './components/Transsmision';
import Kilometraje from './components/Kilometraje';
import BrandAndModel from './components/BrandAndModel';
import Price from './components/Price';
import Color from './components/Color';

async function test() {
  const response = await fetch('http://127.0.0.1:8000/api/car/');
  const data = await response.json();

  // console.log(data.results);
  return data.results;
}

function App() {
  test()
  //fetch('http://127.0.0.1:8000/api/car/',{
  //      'mode': 'cors',
  //      'headers': {
  //        'Access-Control-Allow-Origin': '*',
  //      }      
  //    })
  //    .then(response => response.json())
  //    .then(json => console.log(json))

  return (
    
    
    <Container fluid className="mainConteiner">
      <Header/>
      <Row>
        <Col md={1}>
        </Col>
        <Col md={3}>
          <TestForm/>
        </Col>
      
        <Col className="vehicles-container">
          <VehicleCard/>
          <Row>Filtros</Row>
          <BrandAndModel/>
          <YearFilter/>
          <Transsmision/>
          <Kilometraje/>
          <Price/>
          <Color/>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
