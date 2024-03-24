import React from 'react'
import {Container, Nav, NavLink, Navbar} from "react-bootstrap"
import {Link as routerLink} from "react-router-dom"
import { HashLink } from 'react-router-hash-link'
import {Link} from "react-scroll"


const Header = () => {
  return (
    <Navbar expand="lg" className='poppins-semibold-italic' collapseOnSelect >
        <Container >
          <NavLink>
          {/* <Navbar.Brand style={{color:"#282c34"}} > */}
          <h1>Nithish</h1>
          {/* </Navbar.Brand> */}
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className='ms-auto' style={{gap:"5%"}}>
              {/* <Link style={{textDecoration:"none"}} to="/about">
              <h4 className='h'>About</h4>
            </Link> */}
            {/* <Link style={{textDecoration:"none"}} to="/experience">
              <h4 className='h'>Experience</h4>
            </Link> */}
            {/* <Link style={{textDecoration:"none"}} to="/project">
              <h4 className='h'>Project</h4>
            </Link> */}
             <HashLink style={{textDecoration:"none",color:"#282c34",fontSize:"1.2rem"}}to="/home#about">About</HashLink>
             <HashLink style={{textDecoration:"none",color:"#282c34",fontSize:"1.2rem"}} to="/home#experience">Experience</HashLink>
            <HashLink style={{textDecoration:"none",color:"#282c34",fontSize:"1.2rem"}} to="/home#project">Project</HashLink>
            {/* <Link style={{textDecoration:"none"}} to="/contact" >
              <h4 className='h'>Contact</h4>
            </Link> */}
            <HashLink style={{textDecoration:"none",color:"#282c34",fontSize:"1.2rem"}} to="/home#contact">Contact</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>

       
        
      
    </Navbar>
  )
}

export default Header
