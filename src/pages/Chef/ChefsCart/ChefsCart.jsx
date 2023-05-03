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

			<Container>
				<h4 className='text-center mt-5 mb-5'>
					Our Famous Chefs <hr className='text-danger' />
				</h4>
				<Row xs={1} md={2} lg={3} className="g-2 mb-2 mt-2 d-flex">
					{
						chefs.map(chef =>
							<div key={chef.id} className=''>

								{/* <div className='d-flex'> */}

								<Col md={3}>
									<Card border="light" style={{ width: '25rem' }}>
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

								{/* </div> */}


							</div>
						)
					}
				</Row>
			</Container>





		</div>
	);
};

export default ChefsCart;