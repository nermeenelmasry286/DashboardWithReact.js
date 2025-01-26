import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export function Header() {
  return (
    <>
      <Navbar expand={false} className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">My Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas Header
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
