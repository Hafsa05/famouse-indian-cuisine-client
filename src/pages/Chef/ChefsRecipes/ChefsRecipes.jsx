import React, { useState } from 'react';
import { Button, Card, Col, Container, Figure, Image, Row } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import downloadnew from '../../../assets/downloadnew.png'


const ChefsRecipes = () => {
	const { id } = useParams();

	const chefData = useLoaderData();
	const { name, image, experience, recipes, like, bio, chef_recipe } = chefData;
	const notify = () => toast("Add to my favorite!!..");

	const [favorite, setFavorite] = useState(false);

	return (
		<div>
			<Container >
				<Row className="justify-content-center">
					<Col xs={6} md={4} >
						<img src={downloadnew} alt="My Image" className="img-fluid text-center" />
					</Col>
				</Row>

				<h2 className='text-7xl mb-5' >{name}</h2>
				<div className='d-flex'>
					<div className='gap-5'>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={image} />
						</Card>
					</div>
					<div className='p-4'>
						<p className='fw-semibold'> {bio} <br />
							Experience: {experience} <br />
							Total No. of Recipes: {recipes} <br />
							Like: {like}
						</p>
					</div>

				</div>


				<h2 className='text-center fw-bold'>{name}'s Special Recipes <hr className='text-danger' /></h2>

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
												Ingredients: {recipe.ingredients} <br />
												Cooking Process: {recipe.cooking_process} <br />
												Rating: {recipe.rating}
												<div className='mx-auto'>
													<Rating
														placeholderRating={recipe.rating}
														readonly
														emptySymbol={<FaRegStar></FaRegStar>}
														placeholderSymbol={<FaStar className='text-danger'></FaStar>}
														fullSymbol={<FaStar></FaStar>}
													></Rating>
												</div>
											</Card.Text>
											<Button disabled={favorite} onClick={notify} variant="outline-danger">Add to my favorite</Button>
											<ToastContainer />
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