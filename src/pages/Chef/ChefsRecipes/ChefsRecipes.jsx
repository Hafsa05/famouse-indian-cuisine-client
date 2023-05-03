import React from 'react';
import { Button, Card, Col, Container, Figure, Image, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefsRecipes = () => {
	const { id } = useParams();

	const chefData = useLoaderData();
	const { name, image, experience, recipes, like, bio, chef_recipe } = chefData;

	return (
		<div>
			<Container >
				<div className='bg-info p- 5'>
					<Figure className='d-flex m-5 '>
						<Figure.Image
							width={171}
							height={180}
							alt="171x180"
							src={image}
						/>
						<div className='m-5'>
							Name: {name} <br />
							Experience: {experience} <br />
							Total No. of Recipes: {recipes} <br />
							Like: {like} <br />
							Bio: {bio}
						</div>
					</Figure>
				</div>
				
				<h2 className='text-center fw-bold'>My Special Recipes <hr className='text-danger'/></h2>

				<Row xs={1} md={2} lg={3} className="g-2 mb-2 mt-2 d-flex">
					{
						chef_recipe.map(recipe =>
							<div key={chef_recipe.recipe_id}>
								<Col>
									<Card border="light" style={{ width: '25rem' }}>
										<Card.Img variant="top" src={recipe.recipe_image} />
										<Card.Body>
											<Card.Title>{recipe.recipe_name}</Card.Title>
											<Card.Text>
												<span className='font-weight-bold'>Ingredients:</span> {recipe.ingredients} <br />
												Cooking Process: {recipe.cooking_process} <br />
												Rating: {recipe.rating}
											</Card.Text>
											<Button variant="outline-danger">Add to my favorite</Button>
										</Card.Body>
									</Card>
								</Col>

							</div>
						)
					}




				</Row >
			</Container>


		</div >

	);
};

export default ChefsRecipes;