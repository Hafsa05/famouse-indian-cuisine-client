import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp } from "react-icons/fa";

const ChefsCart = () => {

	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/chef')
			.then(res => res.json())
			.then(data => setChefs(data))
			.catch(error => console.error(error))
	}, [])

	return (
		<div>
			<h4 className='text-center'>
				Chef-cart's data will be here
			</h4>
			{
				chefs.map(chef =>
					<Container key={chef.id} className=''>
						<Row xs={1} md={2} lg={4} className="g-4 mb-4">
							<Col md={3}>
								<Card border="light">
									<Card.Img variant="top" src={chef.image} />
									<Card.Body className='text-center'>
										<Card.Title>{chef.name}</Card.Title>
										<Card.Text className=''>
											Experience: {chef.experience} <br />
											Total No. of Recipes: {chef.recipes} <br />
											Like: {chef.like} <FaRegThumbsUp></FaRegThumbsUp>
										</Card.Text>
										<Link to={`/chef/${chef.id}`} ><Button variant="outline-danger">View Recipes</Button></Link>
										{/* <Link to={`/chef/${key}`}><Button variant="outline-info">View Recipes</Button></Link> */}

									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				)
			}



		</div>
	);
};

export default ChefsCart;