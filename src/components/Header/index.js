import React , {Fragment}from 'react';
import {NavLink} from 'react-router-dom';
import { Nav , Navbar , Container , NavDropdown , Offcanvas } from 'react-bootstrap';
import './style.css';
import ShopIcon from '../Shop/ShopIcon';
import Search from '../Search';

function Header() {
    return (
        <Fragment>
            <div className='navbar-client'>
                <div className='container'>
                    <Search/>
                    <NavLink to='/user-sign' className='user-icon-sign'> <i className="fa-solid fa-user fa-lg"></i> </NavLink>
                    <ShopIcon/>
                </div>
            </div>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand}>
                    <Container >
                        <Navbar.Brand>
                            <NavLink to='/'> <img className='nav-logo' src='/images/Logo.png' alt='nav-logo'/> </NavLink>
                        </Navbar.Brand>
                        <Nav>
                            <NavLink to='/' >Home</NavLink>
                            <NavLink to='about'>About</NavLink>
                            <NavLink to='products'>Products</NavLink>
                            <NavDropdown title="Furnitures" id="basic-nav-dropdown">
                                <NavDropdown.Item as='li'> <NavLink to='furniture/home'>Home Furniture</NavLink> </NavDropdown.Item>
                                <NavDropdown.Item as='li'> <NavLink to='furniture/office'>Office Furniture</NavLink> </NavDropdown.Item>
                                <NavDropdown.Item as='li'> <NavLink to='furniture/hospital'>Hospital Furniture</NavLink> </NavDropdown.Item>
                            </NavDropdown>
                            <NavLink  to='contact'>Contact</NavLink> 
                        </Nav>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Navbar.Brand >
                                    <NavLink to='/'> <img src='/images/Logo2.png' alt='nav-logo'/> </NavLink>
                                </Navbar.Brand>
                            </Offcanvas.Header>
                            <Offcanvas.Body className= 'list-body'>
                                <Nav className="justify-content-end flex-grow-1">
                                    <NavLink to='/' >Home</NavLink>
                                    <NavLink to='about'>About</NavLink>
                                    <NavLink to='products'>Products</NavLink>
                                    <NavDropdown title="Furnitures" id="basic-nav-dropdown">
                                        <NavDropdown.Item as='li'> <NavLink to='furniture/home'>Home Furniture</NavLink> </NavDropdown.Item>
                                        <NavDropdown.Item as='li'> <NavLink to='furniture/office'>Office Furniture</NavLink> </NavDropdown.Item>
                                        <NavDropdown.Item as='li'> <NavLink to='furniture/hospital'>Hospital Furniture</NavLink> </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavLink  to='contact'>Contact</NavLink> 
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </Fragment>
    )
}
export default Header;