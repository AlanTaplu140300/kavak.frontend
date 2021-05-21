import React from 'react';
import {PersonCircle} from 'react-bootstrap-icons';
import {Nav,Navbar} from 'react-bootstrap';
import './components-css/Header.css';

const Header = () => {
    return (
        <Navbar className="header" variant="dark">
            <Navbar.Brand href="/">
                <img alt="" src="https://minerva-olimpo.kavak.services/assets/images/kavak-logo.svg"  width="110" height="35"/>
            </Navbar.Brand>
            <Nav className="cosas">
                <Nav.Link href="/buy">Compra un Auto</Nav.Link>
                <Nav.Link href="/sell">Vende tu Auto</Nav.Link>
                <Nav.Link href="/user-session"><PersonCircle size={25}/></Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;