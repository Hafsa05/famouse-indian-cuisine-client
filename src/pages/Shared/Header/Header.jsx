import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {
	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Simple tooltip
		</Tooltip>
	);

	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then()
			.catch(error => console.error(error));
	}
	return (
		<div>


			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home" className='text-danger'>Famous Indian Cuisine
						<br />
						<small className='fw-light fst-italic'>Good Food Good Mood <FaRegHeart></FaRegHeart> </small></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className='mx-auto '>
							<Link to='/' className='text-decoration-none p-2 text-secondary'>Home</Link>
							<Link to='/blogs' className='text-decoration-none p-2 text-secondary'>Blog</Link>

						</Nav>
						<Nav>
							{user ?
								<Button onClick={handleLogOut} variant="outline-danger">Logout</Button> :
								<Link to='/login'><Button variant="outline-danger">Login</Button></Link>
							}

							<Nav.Link href="#deets" className='text-danger'>
								{
									user ? <img style={{ height: 40 }} className='rounded-circle' src={user.photoURL} alt="" title={user.displayName} /> : <FaUserCircle fontSize={30}></FaUserCircle>

								}
							</Nav.Link>


						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;