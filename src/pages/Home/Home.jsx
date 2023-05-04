import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.png'
import ChefsCart from '../Chef/ChefsCart/ChefsCart';
import Marquee from "react-fast-marquee";
import { FaRegHeart, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Home = () => {
	return (
		<div>
			{/* <h2>this is home</h2> */}
			<Container>
				<Carousel variant="dark" className='mb-4'>
					<Carousel.Item>
						<img
							className="d-block w-100 h-50"
							src={c2}
							alt="First slide"
						/>
						<Carousel.Caption className='bg-white'>
							<h5>Famous Indian Cuisine</h5>
							<p>Good Food Good Mood <FaRegHeart></FaRegHeart></p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 h-50"
							src={c3}
							alt="Second slide"
						/>
						<Carousel.Caption className='bg-white'>
							<h5 >Famous Indian Cuisine</h5>
							<p>Good Food Good Mood <FaRegHeart></FaRegHeart></p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 h-50"
							src={c4}
							alt="Third slide"
						/>
						<Carousel.Caption className='bg-white'>
							<h5>Famous Indian Cuisine</h5>
							<p>Good Food Good Mood <FaRegHeart></FaRegHeart></p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<Marquee className='text-danger fs-5' speed={100}>
					Welcome to Indian Famous Cuisine - Good Food Good Mood <FaRegHeart></FaRegHeart>
				</Marquee>
			</Container>

			<ChefsCart></ChefsCart>

			<Container className='mx-auto'>
				<h2 className='text-center'>Follw us for more updates<hr className='text-danger' /></h2>

				<Row >
					<Col>
						<a href="https://www.facebook.com/" className='text-decoration-none text-dark'>
							<div className="box">
								<FaFacebook size={20} className='text-danger' />
								<p>Facebook</p>
							</div>
						</a>
					</Col>
					<Col>
						<a href="https://www.instagram.com/" className='text-decoration-none text-dark'>
							<div className="box">
								<FaInstagram size={20} className='text-danger' />
								<p>Instagram</p>
							</div>
						</a>
					</Col>

					<Col>
						<a href="https://www.youtube.com/" className='text-decoration-none text-dark'>
							<div className="box">
								<FaYoutube size={20} className='text-danger' />
								<p>YouTube</p>
							</div>
						</a>
					</Col>
					<Col>
						<a href="https://twitter.com/" className='text-decoration-none text-dark'>
							<div className="box">
								<FaTwitter size={20} className='text-danger' />
								<p>Twitter</p>
							</div>
						</a>
					</Col>
				</Row>

			</Container>

		</div>
	);
};

export default Home;