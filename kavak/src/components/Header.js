import React from 'react';
import Card from 'react-bootstrap/Card';
import {PersonCircle} from 'react-bootstrap-icons';
import {Form, Button,Nav,Navbar,FormControl} from 'react-bootstrap';
import './components-css/Header.css';

const Header = () => {
    return (
        <Navbar className="header" variant="dark">
            <Navbar.Brand href="#home">
                <img src="https://minerva-web.kavak.services/assets/kavak_white.png"  width="110" height="35"/>
            </Navbar.Brand>
            <Nav className="cosas">
                <Nav.Link href="#comprar">Compra un Auto</Nav.Link>
                <Nav.Link href="#vender">Vende tu Auto</Nav.Link>
                <Nav.Link href="#sesion"><PersonCircle size={25}/></Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;