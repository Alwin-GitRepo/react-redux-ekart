import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {

  const wishlist = useSelector((state)=>state.wishListReducer)
  const cart = useSelector((state)=>state.cartReducer)
  const location = useNavigate()

  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="bg-info m-0 sticky-top">
            <Container fluid>
                <Navbar.Brand onClick={()=>location('/')}><i class="fa-brands fa-shopify me-2 fs-2"></i>Shop N Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                  <Nav>
                      <Nav.Link onClick={()=>location('/wishlist')} className='position-relative'><i className='fa-solid fa-heart text-light fs-3 me-5'><sup className='position-absolute mt-3'><Badge bg="danger" style={{fontSize : ".5rem",marginLeft : "-.3rem"}}>{wishlist.length}</Badge></sup></i></Nav.Link>
                      <Nav.Link onClick={()=>location('/cart')} className='position-relative'><i className='fa-solid fa-cart-arrow-down text-light fs-3 me-5'><sup className='position-absolute mt-3'><Badge bg="danger" style={{fontSize : ".5rem",marginLeft : "-.3rem"}}>{cart.length}</Badge></sup></i></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header