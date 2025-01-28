import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { NavLinkStyled, NavIcon, UserPhoto, DarkModeToggle, NavLinks } from '../Custom/HeaderLink';
import { BsHouseDoor, BsBox, BsPerson, BsCart, BsInfoCircle, BsPhone, BsGear, BsBell, BsEnvelope, BsSun, BsMoon } from 'react-icons/bs';

export function Header() {
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // On page load, get the saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDark(savedTheme === 'dark');
    }
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <>
      <Navbar
        fixed="top"
        expand={false}
        style={{
          backgroundColor: dark ? '#343a40' : '#f8f9fd',
          boxShadow: dark ? 'rgba(0, 0, 0, 0.88) 0px 10px 10px -8px' : 'rgba(133, 189, 215, 0.88) 0px 10px 10px -8px', 
        }}
      >
        <Container fluid className="d-flex justify-content-between align-items-center">
          
          <Navbar.Brand
            href="#"
            style={{
              color: dark ? '#ffffff' : '#1091d3',
              fontSize: '30px',
              fontWeight: '900',
              marginLeft: '10px', 
            }}
          >
          
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{
              color: dark ? '#ffffff' : '#1091d3',
              fontSize: '15px',
              marginLeft: '0',
              marginRight:'20px',
              padding: '10px',
            }}
            onClick={handleShow}
          />

          
            My Store
          </Navbar.Brand>

          
          <div className="d-flex align-items-center gap-3">
            <UserPhoto src="/images/1.jpeg" alt="User" />
            <div style={{ color: dark ? '#ffffff' : '#1091d3', fontSize: '18px' }}>Batata</div>
            <DarkModeToggle onClick={toggleDarkMode}>
              <BsSun style={{ fontSize: '20px', display: dark ? 'none' : 'block' }} />
              <BsMoon style={{ fontSize: '20px', display: dark ? 'block' : 'none' }} />
            </DarkModeToggle>
          </div>
        </Container>
      </Navbar>

      {/* Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
        style={{ width: '250px', backgroundColor: dark ? '#343a40' : '#f8f9fd' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            id="offcanvasNavbarLabel"
            style={{
              color: dark ? '#ffffff' : '#1091d3',
              fontSize: '30px',
              fontWeight: '900',
            }}
          >
            My Store
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavLinks>
            <NavLinkStyled to="/" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsHouseDoor />
              </NavIcon> Home
            </NavLinkStyled>
            <NavLinkStyled to="/Products" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsBox />
              </NavIcon> Products
            </NavLinkStyled>
            <NavLinkStyled to="/Orders" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsCart />
              </NavIcon> Orders
            </NavLinkStyled>
            <NavLinkStyled to="/Profile" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsPerson />
              </NavIcon> Profile
            </NavLinkStyled>
            <NavLinkStyled to="/About" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsInfoCircle />
              </NavIcon> About
            </NavLinkStyled>
            <NavLinkStyled to="/Contact" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsPhone />
              </NavIcon> Contact
            </NavLinkStyled>
            <NavLinkStyled to="/Services" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsBox />
              </NavIcon> Services
            </NavLinkStyled>
            <NavLinkStyled to="/Settings" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsGear />
              </NavIcon> Settings
            </NavLinkStyled>
            <NavLinkStyled to="/Notifications" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsBell />
              </NavIcon> Notifications
            </NavLinkStyled>
            <NavLinkStyled to="/Messages" style={{ color: dark ? '#ffffff' : '#1091d3' }}>
              <NavIcon>
                <BsEnvelope />
              </NavIcon> Messages
            </NavLinkStyled>
          </NavLinks>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
