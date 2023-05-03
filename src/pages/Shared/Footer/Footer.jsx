import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaMailBulk, FaPhoneAlt, FaRegHeart } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='text-center'>
			<footer className="bg-light py-3">
				<Container>
					<Row>
						<Col md={6}>
							<h4 className='text-danger'>Famous Indian Cuisine</h4> <hr className='text-danger' />
							<p>Good Food Good Mood <FaRegHeart></FaRegHeart></p>
							{/* <p>We are a restaurant that specializes in authentic Indian cuisine.</p> */}
						</Col>
						{/* <Col md={4}>
							<h4 className='text-danger'>Opening Hours</h4> <hr className='text-danger'/>
							<p>Monday-Saturday: 11am - 10pm<br />
								Sunday: 12pm - 9pm</p>
						</Col> */}
						<Col md={6}>
							<h4 className='text-danger'>Contact Us</h4> <hr className='text-danger' />
							<p>123 Main St.<br />
								Banani, Dhaka-1205, Bangladesh<br />
								<FaPhoneAlt></FaPhoneAlt> Phone: (+880) 555-1234<br />
								<FaMailBulk></FaMailBulk> Email: info@indiancuisine.com</p>
						</Col>
					</Row>
					<hr className='text-danger'/>
					<p className="text-center">© 2023 Famous Indian Cuisine. All rights reserved.</p>
				</Container>
			</footer>

		</div>
	);
};

export default Footer;