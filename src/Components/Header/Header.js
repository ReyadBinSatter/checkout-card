import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cart2 } from 'react-bootstrap-icons';
import { CartState } from '../../Context/Context';
const Header = () => {

    const { state: {cart},}= CartState()
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
                    <Nav>

                        <Link to="/cart">
                            <Cart2 className='fs-4'></Cart2>
                            <Badge className='bg-transparent text-dark p-0' >{cart.length}</Badge>
                        </Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;