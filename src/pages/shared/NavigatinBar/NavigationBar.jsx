import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut =() =>{
        logOut()
        .then(()=>{})
        .catch(error =>console.error(error))
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/' className='ms-2'>Home</Link>
                            <Link to='/' className='ms-2'>Career</Link>
                            <Link to='/' className='ms-2'>About</Link>
                            
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle></FaUserCircle>}
                            
                                {user ? <Button onClick={handleLogOut}variant="secondary">logOut</Button>
                                    :
                                    <Link to='/login'><Button variant="secondary">login</Button></Link>}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;