import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Imagen from './Imagen';

function Navbar2() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
      
        <Link className="navbar-brand" to="/">
          <Imagen imgUrl="/tipografia.png" // Reemplaza con la ruta de tu imagen en grande
          imgAlt="Tipografia FunWrite"
          imgWidth= '200px'
          imgMaxWidth= '500px'
        />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/historias">Historias</Link>
            <Link className="nav-link" to="/perfiles">Perfiles</Link>
            <Link className="nav-link" to="/acerca-de">Acerca de</Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navbar2;
