import './App.css';
import TestForm from './components/TestForm';
import {Container, Row, Col} from 'react-bootstrap';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <TestForm/>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
  );
}

export default App;
