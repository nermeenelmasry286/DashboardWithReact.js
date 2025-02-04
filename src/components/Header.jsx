import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BsHouseDoor, BsBox, BsPerson, BsCart, BsInfoCircle, BsPhone, BsGear, BsBell, BsEnvelope } from 'react-icons/bs';
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../store/Slices/ModeSlice';

export function Header() {
  const mode = useSelector((state) => state.modeStatus.mode);
  const dispatch = useDispatch();
  
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const toggleMode = () => dispatch(changeMode(mode === 'light' ? 'dark' : 'light'));

  return (
    <>
      <Navbar fixed="top" expand={false} className={mode=='dark'?styles.navbarDark:styles.navbarLight}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#" className={mode=='dark'?styles.navbarBrandDark:styles.navbarBrandLight}>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className={mode=='dark'?styles.toggleDark:styles.toggleLight} onClick={handleShow} />
            My Store
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-3">
            <img src="/images/1.jpeg" alt="User" className={styles.userPhoto} />
            <div className={mode=='dark'?styles.textDark:styles.textLight}>Batata</div>
            <div onClick={toggleMode}>
              { mode =='dark'?
            <IoMoonOutline style={{color:'#1089d3'}}/>
            :<MdOutlineWbSunny style={{color:'#1089d3'}}/>
              }

            </div>

          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start" className={mode=='dark'? styles.offcanvasDark:styles.offcanvasLight}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel" className={mode=='dark' ?styles.offcanvasTitleDark : styles.offcanvasTitleLight}>
            My Store
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.navLinksLight}>
            <Link to="/" className={styles.navLink}>
              <BsHouseDoor /> Home
            </Link>
            
            <Link to="/products" className={styles.navLink}>
              <BsBox /> Products
            </Link>
            <Link to="/orders" className={styles.navLink}>
              <BsCart /> Orders
            </Link>
            <Link to="/profile" className={styles.navLink}>
              <BsPerson /> Profile
            </Link>
            <Link to="/about" className={styles.navLink}>
              <BsInfoCircle /> About
            </Link>
            <Link to="/contact" className={styles.navLink}>
              <BsPhone /> Contact
            </Link>
            <Link to="/services" className={styles.navLink}>
              <BsBox /> Services
            </Link>
            <Link to="/settings" className={styles.navLink}>
              <BsGear /> Settings
            </Link>
            <Link to="/notifications" className={styles.navLink}>
              <BsBell /> Notifications
            </Link>
            <Link to="/messages" className={styles.navLink}>
              <BsEnvelope /> Messages
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
