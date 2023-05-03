import React from 'react';
import { Button, Card, Col, Container, Figure, Image, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefsRecipes = () => {
	const { id } = useParams();

	const chefData = useLoaderData();
	return (
		<div>
			<Container >
				<h4>will show chef & recipes of id no {id} {chefData.name}</h4>
				<Figure className='d-flex m-5'>
					<Figure.Image
						width={171}
						height={180}
						alt="171x180"
						src={chefData.image}
					/>
					<div className='m-5'>
						Name: {chefData.name} <br />
						Experience: {chefData.experience} <br />
						Total No. of Recipes: {chefData.recipes} <br />
						Like: {chefData.like} <br />
						Bio: {chefData.bio}
					</div>
				</Figure>

				<p className='text-center'>My Special Recipes </p>

				<Row xs={1} md={2} lg={3} className="g-2 mb-2 mt-2 d-flex">
					<Col>
						<Card border="light" style={{ width: '25rem' }}>
							<Card.Img variant="top" src={chefData.recipe_image} />
							<Card.Body>
								<Card.Title>{chefData.recipe_name}</Card.Title>
								<Card.Text>
									<span className='font-weight-bold'>Ingredients:</span> {chefData.ingredients} <br />
									Cooking Process: {chefData.cooking_process} <br />
									Rating: {chefData.rating}
								</Card.Text>
								<Button variant="outline-danger">Favorite</Button>
							</Card.Body>
						</Card>
					</Col>

					{/* </div> */}



				</Row >
			</Container>
		</div >

	);
};

export default ChefsRecipes;