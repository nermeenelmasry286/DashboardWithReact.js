import React, { useState } from 'react'; 
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import Navbar from 'react-bootstrap/Navbar'; 
import Container from 'react-bootstrap/Container'; 
import { NavLink } from 'react-router-dom'; 
import {NavLinkStyled,NavIcon,UserPhoto,DarkModeToggle,NavLinks} from '../Custom/HeaderLink';
import { BsHouseDoor, BsBox, BsPerson, BsCart, BsInfoCircle, BsPhone, BsGear, BsBell, BsEnvelope, BsSun, BsMoon } from 'react-icons/bs'; 


export function Header() { 
  const [show, setShow] = useState(false);
 const [dark,setDark] =useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return ( 
    <> 
      <Navbar fixed='top' expand={false} style={{ 
        backgroundColor: '#f8f9fd', 
        boxShadow: 'rgba(133, 189, 215, 0.88) 0px 10px 10px -8px', 
      }}> 
        <Container fluid className='d-flex justify-content-between align-items-center'> 
          {/* Navbar toggle on the left */}
          <Navbar.Toggle 
            aria-controls="offcanvasNavbar" 
            style={{ 
              color: '#1091d3', 
              fontSize: '15px', 
              marginLeft: '0', 
              padding: '10px', 
            }} 
            onClick={handleShow} 
          />
          
          {/* Brand on the middle */}
          <Navbar.Brand href="#" style={{ 
            color: '#1091d3', 
            fontSize: '30px', 
            fontWeight: '900',
            marginLeft: '125px' // Space between brand and edge
          }}> 
            My Store 
          </Navbar.Brand> 

          {/* User info and dark mode toggle on the right */}
          <div className="d-flex align-items-center gap-3">
            <UserPhoto src="/images/1.jpeg" alt="User" />
            <div style={{ color: '#1091d3', fontSize: '18px' }}>Batata</div>
            <DarkModeToggle >
              <BsSun style={{ fontSize: '20px' }} />
              <BsMoon style={{ fontSize: '20px' }} />
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
        style={{ width: '250px' }} 
      > 
        <Offcanvas.Header closeButton> 
          <Offcanvas.Title id="offcanvasNavbarLabel" style={{ 
            color: '#1091d3', 
            fontSize: '30px', 
            fontWeight: '900' 
          }}> 
            My Store
          </Offcanvas.Title> 
        </Offcanvas.Header> 
        <Offcanvas.Body> 
          <NavLinks> 
            <NavLinkStyled to='/'><NavIcon><BsHouseDoor /></NavIcon> Home</NavLinkStyled> 
            <NavLinkStyled to='/Products'><NavIcon><BsBox /></NavIcon> Products</NavLinkStyled> 
            <NavLinkStyled to='/Orders'><NavIcon><BsCart /></NavIcon> Orders</NavLinkStyled> 
            <NavLinkStyled to='/Profile'><NavIcon><BsPerson /></NavIcon> Profile</NavLinkStyled> 
            <NavLinkStyled to='/About'><NavIcon><BsInfoCircle /></NavIcon> About</NavLinkStyled>
            <NavLinkStyled to='/Contact'><NavIcon><BsPhone /></NavIcon> Contact</NavLinkStyled>
            <NavLinkStyled to='/Services'><NavIcon><BsBox /></NavIcon> Services</NavLinkStyled>
            <NavLinkStyled to='/Settings'><NavIcon><BsGear /></NavIcon> Settings</NavLinkStyled>
            <NavLinkStyled to='/Notifications'><NavIcon><BsBell /></NavIcon> Notifications</NavLinkStyled>
            <NavLinkStyled to='/Messages'><NavIcon><BsEnvelope /></NavIcon> Messages</NavLinkStyled>
          </NavLinks>
        </Offcanvas.Body> 
      </Offcanvas> 
    </> 
  ); 
}
