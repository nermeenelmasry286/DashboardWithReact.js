import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export function Header() {
  return (
    <>
      <Navbar  fixed='top' expand={false} style={{
  backgroundColor: '#f8f9fd',
  boxShadow: 'rgba(133, 189, 215, 0.88) 0px 10px 10px -8px',
}}>
        <Container fluid className='d-flex justify-content-between align-items-center'>
          
          <Navbar.Brand href="#" style={{color:'#1091d3',fontSize:'30px',fontWeight:'900'}} className='ms-2'>My Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" style={{color:'#1091d3',fontSize:'15px',marginLeft:'auto'}}  />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
              hiiiiiiiiiii
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <ul>
              <li>home</li>
              <li>products</li>
              <li>add product</li>
              <li>setting</li>
              <li>orders</li>
              <li>messages</li>
            </ul>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
