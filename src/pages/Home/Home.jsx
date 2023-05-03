import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.png'
import ChefsCart from '../Chef/ChefsCart/ChefsCart';
import ChefsRecipes from '../Chef/ChefsRecipes/ChefsRecipes';
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
							<h5 >First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 h-50"
							src={c3}
							alt="Second slide"
						/>
						<Carousel.Caption className='bg-white'>
							<h5 >Second slide label</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100 h-50"
							src={c4}
							alt="Third slide"
						/>
						<Carousel.Caption className='bg-white'>
							<h5>Third slide label</h5>
							<p>
								Praesent commodo cursus magna, vel scelerisque nisl consectetur.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<Marquee className='text-danger fs-5' speed={100}>
					Welcome to Indian Famous Cuisine - Good Food Good Mood <FaRegHeart></FaRegHeart>
				</Marquee>
			</Container>

			<ChefsCart></ChefsCart>
			<ChefsRecipes></ChefsRecipes>

			<Container  className='mx-auto'>
				<h2 className='text-center'>Follw us for more updates<hr className='text-danger'/></h2>
				
				<Row>
					<Col>
						<a href="https://www.facebook.com/">
							<div className="box">
								<FaFacebook size={40} />
								<p>Facebook</p>
							</div>
						</a>
					</Col>
					<Col>
						<a href="https://www.instagram.com/">
							<div className="box">
								<FaInstagram size={40} />
								<p>Instagram</p>
							</div>
						</a>
					</Col>
				</Row>
				<Row>
					<Col>
						<a href="https://www.youtube.com/">
							<div className="box">
								<FaYoutube size={40} />
								<p>YouTube</p>
							</div>
						</a>
					</Col>
					<Col>
						<a href="https://twitter.com/">
							<div className="box">
								<FaTwitter size={40} />
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