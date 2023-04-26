import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUser, FaUserCircle } from "react-icons/fa";


const Header = () => {
    const {user} = useContext(AuthContext);
    
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={60}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>

            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features"><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets" style={{fontSize: 'rem'}}><FaUserCircle></FaUserCircle></Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                            {user ? <Button variant="secondary">logOut</Button>
                            :
                            <Link><Button variant="secondary">login</Button></Link>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;