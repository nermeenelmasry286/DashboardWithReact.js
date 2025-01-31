import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BsHouseDoor, BsBox, BsPerson, BsCart, BsInfoCircle, BsPhone, BsGear, BsBell, BsEnvelope, BsSun, BsMoon } from 'react-icons/bs';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDark(savedTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <>
      <Navbar fixed="top" expand={false} className={`${dark ? styles.navbarDark : styles.navbarLight}`}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand
            href="#"
            className={`${dark ? styles.navbarBrandDark : styles.navbarBrandLight}`}>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className={`${dark ? styles.toggleDark : styles.toggleLight}`}
              onClick={handleShow}
            />
            My Store
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-3">
            <img src="/images/1.jpeg" alt="User" className={styles.userPhoto} />
            <div className={`${dark ? styles.textDark : styles.textLight}`}>Batata</div>
            <div onClick={toggleDarkMode} className={styles.darkModeToggle}>
              <BsSun style={{ fontSize: '20px', color:'#1091d3',display: dark ? 'none' : 'block' }} />
              <BsMoon style={{ fontSize: '20px', display: dark ? 'block' : 'none' }} />
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
        className={`${dark ? styles.offcanvasDark : styles.offcanvasLight}`}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            id="offcanvasNavbarLabel"
            className={`${dark ? styles.offcanvasTitleDark : styles.offcanvasTitleLight}`}
          >
            My Store
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={`${dark ? styles.navLinksDark : styles.navLinksLight}`}>
            <Link to="/" className={`${styles.navLink}`}>
              <BsHouseDoor /> Home
            </Link>
            <Link to="/products" className={`${styles.navLink}`}>
              <BsBox /> Products
            </Link>
            <Link to="/orders" className={`${styles.navLink}`}>
              <BsCart /> Orders
            </Link>
            <Link to="/profile" className={`${styles.navLink}`}>
              <BsPerson /> Profile
            </Link>
            <Link to="/about" className={`${styles.navLink}`}>
              <BsInfoCircle /> About
            </Link>
            <Link to="/contact" className={`${styles.navLink}`}>
              <BsPhone /> Contact
            </Link>
            <Link to="/services" className={`${styles.navLink}`}>
              <BsBox /> Services
            </Link>
            <Link to="/settings" className={`${styles.navLink}`}>
              <BsGear /> Settings
            </Link>
            <Link to="/notifications" className={`${styles.navLink}`}>
              <BsBell /> Notifications
            </Link>
            <Link to="/messages" className={`${styles.navLink}`}>
              <BsEnvelope /> Messages
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}