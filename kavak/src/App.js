import './App.css';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Buy from "./components/Buy";
import Home from "./components/Home";



function App() {

  return (
    <Router>
      <Container fluid className="mainConteiner">
        <Header/>
      </Container>
      <Container fluid className="mainConteiner">
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/buy">
            <Buy/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
