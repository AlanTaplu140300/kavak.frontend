import './App.css';
import VehicleCard from './components/VehicleCard';
import TestForm from './components/TestForm';
import YearFilter from './components/YearFilter';
import {Container, Row, Col} from 'react-bootstrap';

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
    
    <Row>
      <Col md={1}>
      </Col>
      <Col md={2}>
        <TestForm/>
      </Col>
      <Col className="vehicles-container">
        <VehicleCard/>
        <YearFilter/>
      </Col>
      </Row>
  );
}

export default App;
