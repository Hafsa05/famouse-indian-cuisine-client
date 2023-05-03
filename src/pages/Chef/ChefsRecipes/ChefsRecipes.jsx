import React from 'react';
import { Col, Container, Figure, Image } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefsRecipes = () => {
	const { id } = useParams();

	const chefData= useLoaderData();
	return (
		<Container >
			{/* <h4>will show chef & recipes of id no {id} & </h4>
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
			</Figure> */}
		</Container>
	);
};

export default ChefsRecipes;