import './App.css';
import VehicleCard from './components/VehicleCard';
import TestForm from './components/TestForm';
import {Container, Row, Col} from 'react-bootstrap';


function App() {
  return (
    <Container>
      <Row>
        <Col md="2">
          <TestForm/>
        </Col>
        <Col className="vehicles_container">
          <VehicleCard/>
          <VehicleCard/>
          <VehicleCard/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
