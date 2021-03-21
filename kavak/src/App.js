import './App.css';
import TestForm from './components/TestForm';
import VehicleCard from './components/VehicleCard';
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
    <Container>
      <Row>
        <Col>
          <TestForm/>
        </Col>
        <Col>
          <VehicleCard/>
        </Col>
        <Col>
          <YearFilter/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
