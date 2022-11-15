import React from 'react'
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa';
import {IoIosArrowForward} from 'react-icons/io'
import navLogo from './assets/images/nav-logo.png'
import metaMask from './assets/images/metamask1.png'
import walletConnect from './assets/images/walletconnect-logo.png'

function NavBar() {
  const [popUp, setPopUp] = useState(false)
  const handleClick = () => {
    setPopUp(!popUp)
  }
  return (
    <>
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand><Link to='/' className='Navlink'><img src={navLogo} alt="" className='img-fluid nav-logo'/><span className='navBrand'>Metabnb</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link><Link to='/' className='Navlink mx-2 nav-txt'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/places' className='Navlink mx-2 nav-txt'>Place to Stay</Link></Nav.Link>
              <Nav.Link  className='mx-2 nav-txt'>NFTs</Nav.Link>
              <Nav.Link className='mx-2 nav-txt'>Community</Nav.Link>
            </Nav>
            <Nav className='ms-auto'>
              <button className="btn btn-rounded purple-btn" onClick={handleClick}>Create Wallet</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {
        popUp && (
          <div className='overlay-background' onClick={handleClick}>
              <div className="overlay-container rounded col-12 col-md-6 col-lg-5">
                <div className="d-flex px-4">
                  <h5>Connect Wallet</h5>
                  <FaTimes className='ms-auto mt-1' onClick={handleClick}/>
                </div>
                <hr className='hr'/>
                <div className='mt-4 px-4 mb-2'>
                  <p>Choose your preferred wallet:</p>
                  <div>
                    <div className='d-flex mb-3 wallet-div py-2 px-2 rounded'>
                      <img src={metaMask} alt="" className='img-fluid'/>
                      <p className='mt-2 mx-2 wallet-text'>Metamask</p>
                      <IoIosArrowForward className='mt-3 ms-auto text-secondary'/>
                    </div>
                    <div className="d-flex wallet-div py-2 px-2 rounded">
                      <img src={walletConnect} alt="" className='img-fluid'/>
                      <p className="mt-2 mx-2 wallet-text">WalletConnect</p>
                      <IoIosArrowForward className='mt-3 ms-auto text-secondary'/>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )
      }
      
    </>
  )
}

export default NavBar