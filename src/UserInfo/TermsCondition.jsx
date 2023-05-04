import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
	return (
		<div>
			<h2>Our terms and conditions:</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium error nemo blanditiis dolorem necessitatibus excepturi, optio corporis voluptas esse totam doloribus temporibus quos voluptatum eius quas veritatis similique earum distinctio repellat aliquam ducimus nulla. Nemo voluptas itaque repellendus nulla amet, recusandae, magnam adipisci at reiciendis, earum quia. Doloribus, placeat?</p>
			<p>Go back to <Link to='/register'>Register</Link></p>
		</div>
	);
};

export default TermsCondition;