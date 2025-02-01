import React, { useState, useEffect, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BsHouseDoor, BsBox, BsPerson, BsCart, BsInfoCircle, BsPhone, BsGear, BsBell, BsEnvelope, BsSun, BsMoon } from 'react-icons/bs';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Layout/SharedLayout'; 

export function Header() {
  const [show, setShow] = useState(false);
  const { mode, toggleMode } = useContext(ThemeContext); 
  const [, setMode] = useState(mode); 


  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== mode) {
      setMode(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', mode); 
  }, [mode]);

  return (
    <>
      <Navbar fixed="top" expand={false} className={`${mode === 'dark' ? styles.navbarDark : styles.navbarLight}`}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand
            href="#"
            className={`${mode === 'dark' ? styles.navbarBrandDark : styles.navbarBrandLight}`}
          >
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className={`${mode === 'dark' ? styles.toggleDark : styles.toggleLight}`}
              onClick={handleShow}
            />
            My Store
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-3">
            <img src="/images/1.jpeg" alt="User" className={styles.userPhoto} />
            <div className={`${mode === 'dark' ? styles.textDark : styles.textLight}`}>Batata</div>
            <div onClick={toggleMode} className={styles.darkModeToggle}>
              <BsSun style={{ fontSize: '20px', color: '#1091d3', display: mode === 'light' ? 'block' : 'none' }} />
              <BsMoon style={{ fontSize: '20px', display: mode === 'dark' ? 'block' : 'none' }} />
            </div>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
        className={`${mode === 'dark' ? styles.offcanvasDark : styles.offcanvasLight}`}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            id="offcanvasNavbarLabel"
            className={`${mode === 'dark' ? styles.offcanvasTitleDark : styles.offcanvasTitleLight}`}
          >
            My Store
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={`${mode === 'dark' ? styles.navLinksDark : styles.navLinksLight}`}>
            <Link to="/" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsHouseDoor /> Home
            </Link>
            <Link to="/products" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsBox /> Products
            </Link>
            <Link to="/orders" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsCart /> Orders
            </Link>
            <Link to="/profile" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsPerson /> Profile
            </Link>
            <Link to="/about" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsInfoCircle /> About
            </Link>
            <Link to="/contact" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsPhone /> Contact
            </Link>
            <Link to="/services" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsBox /> Services
            </Link>
            <Link to="/settings" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsGear /> Settings
            </Link>
            <Link to="/notifications" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsBell /> Notifications
            </Link>
            <Link to="/messages" className={`${mode === 'dark' ? styles.navLinkDark : styles.navLink}`}>
              <BsEnvelope /> Messages
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
