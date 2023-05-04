import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBookOpen, FaRegBookmark, FaRegThumbsUp } from 'react-icons/fa';

const Blogs = () => {
	return (
		<div>
			<Container >
				<div className='d-flex'>
					<div className='mt-5 flex-grow-1'>
						<h4 className=''>Que & Ans Blogs  </h4>
					</div>
					<div className='mt-5 fs-4 text-danger'>
						<FaRegThumbsUp></FaRegThumbsUp> <FaRegBookmark></FaRegBookmark> <FaBookOpen></FaBookOpen>
					</div>
				</div>
				<hr className='text-danger' />


				<p className='fs-4 fw-semibold'>
					<span className='text-info fw-semibold'>1. Que:</span> Tell us the differences between uncontrolled and controlled components. <br /></p>
				<p className='fs-5'>
					<span className='text-info fw-semibold'>Ans:</span> A controlled component in React is one that is controlled by React state, whereas an uncontrolled component keeps its own internal state. The parent component handles the state of the controlled component, which gets its current value and an update callback through props. When the user interacts with the component, the parent component changes the state, which changes the value of the component. An uncontrolled component keeps its own internal state, and when the user interacts with it, it changes its own state, which modifies the component's value. <br />
					A form input field is a common example of a controlled component, where the state of the input is controlled by the parent component and handed down as props. Consider a login form that requires the user's email address and password. The status of the input fields would be handled by the parent component and sent down as props to the controlled input fields. The component state handles form data with controlled components. An onChange event handler is required for a controlled component to update the component state with new form data. The onChange event handler sets the value of a controlled component, which is provided as a prop from the parent component. Controlled components provide greater control over form data and make sophisticated form validations easier to perform. They do, however, need additional coding to set up and administer.
					<br />
					A modal window is an example of an uncontrolled component, as its state (open or closed) is maintained internally by the component itself. In this case, the modal component accesses the DOM element through a ref and updates the state accordingly. In React, form elements (such as input, select, and textarea) are typically uncontrolled. When using uncontrolled components, the form data is handled by the DOM rather than the component. The value of an uncontrolled component is set by default or by the user, and it may then be retrieved from the DOM using the ref property. Because they require less code, uncontrolled components are easier to use. However, they provide less control over the form data and can make complex form validations more difficult to implement.
					<br />
				</p>

				<p className='fs-4 fw-semibold'>
					<span className='text-info fw-semibold'>2. Que:</span> How to validate React props using PropTypes. </p>
				<p className='fs-5'>
					<span className='text-info fw-semibold'>Ans:</span> React's built-in library, PropTypes, offers a means to verify the data type of the props that are supplied to a component. It enables developers to confirm that a component receives props that are the correct kind and form. We can quickly identify mistakes and troubleshoot problems involving data type inconsistencies or missing props by specifying the PropTypes for each prop.

					PropTypes must be imported from the "prop-types" library, and the anticipated prop types for every prop in the component must be specified.

				</p>

				<p className='fs-4 fw-semibold'>
					<span className='text-info fw-semibold'>3. Que:</span> Tell us the difference between nodejs and express js.
				</p>
				<p className='fs-5'>
					<span className='text-info fw-semibold'>Ans:</span> Node.js is an open-source, cross-platform runtime environment for executing JavaScript code outside of a browser. It's important to note that NodeJS is not a framework or a programming language. Most people are perplexed and believe it is a framework or a programming language. It is designed to construct scalable network applications using an asynchronous event-driven approach. It is based on Google Chrome's V8 engine, which allows for quick and efficient app development.	The framework has achieved remarkable success in terms of performance and scalability by employing a single-threaded method for web loading and asynchronous programming. Furthermore, you may benefit from using it to improve your project's backend functionality by implementing Node JS-based frameworks such as Express, Socket.io, and Meteor. <br />
					On the other hand Express.js is an efficient framework that runs on top of Node.js' web server capability to simplify APIs and offer useful new features. It simplifies the organization of your application's functionality through the use of middleware and routing. It extends the HTTP objects in Node.js with useful functions. It makes it easier to display dynamic HTTP objects. The main differences between Node.js and Express.js are: <br />
					<div className='text-info'>
						<ul >
							<li> Node.js is a runtime environment, whereas Express.js is a web framework built on top of Node.js.</li>
						</ul>

						<ul>
							<li> Node.js offers fundamental capabilities such as file system access, network connectivity, and process management, but Express.js adds functionality such as routing, middleware, and template engines.</li>
						</ul>

						<ul>
							<li> Node.js may be used to create both client-side and server-side apps, but Express.js is only used to create server-side applications.</li>
						</ul>

						<ul>
							<li> Node.js is more low-level and requires more code to construct a web application from scratch, but Express.js is more high-level and provides more tools and capabilities to ease the process of building web applications.</li>
						</ul>

						<ul>
							<li> Node.js has a single-threaded event-driven design, but Express.js has a middleware architecture that allows developers to add functionality to an application in a modular fashion.</li>
						</ul>
					</div>

					To summarize, Node.js is a robust runtime environment that enables developers to create server-side JavaScript applications. Express.js is a lightweight and adaptable web application framework built on top of Node.js that adds functionality and tools for developing online apps. They offer a solid foundation for developing scalable, high-performance web applications.
				</p>

				<p className='fs-4 fw-semibold'>
					<span className='text-info fw-semibold'>4. Que:</span> What is a custom hook, and why will you create a custom hook?
				</p>
				<p className='fs-5'>
					<span className='text-info fw-semibold'>Ans:</span> A JavaScript method called a "custom hook" enables you to reuse stateful functionality across several React application components. Custom hooks are frequently made to include reusable logic that may be shared by several components, making it simple to abstract away complicated or repetitive code into reusable functions. It is simpler to write reusable and maintainable code with React thanks to hooks, which let you handle state and side effects in functional components. You may build your own custom hooks to encapsulate reusable functionality and distribute it amongst components even though React comes with a variety of built-in hooks (such as useState, useEffect, useContext, etc.). <br />
					There are a number of uses for custom hooks, including: <br />
					<div className='text-info'>
						<ul>
							<li >
								Reusability: If you discover that you need to reuse a certain stateful piece of logic across several components, using a custom hook can let you do so without writing duplicate code.
							</li>
						</ul>

						<ul>
							<li>
								Encapsulation: You may make your code easier to read and maintain by encapsulating complicated or repetitive functionality inside of a custom hook.
							</li>
						</ul>

						<ul>
							<li>
								Custom hooks can be used to hide implementation specifics and offer a clearer user interface for other components. When using APIs or other external services, this may be quite helpful.
							</li>
						</ul>

						<ul>
							<li>
								Separation of Concerns: By separating concerns inside your codebase with the use of a custom hook, you may make it simpler to analyze and test your code.
							</li>
						</ul>
					</div>

				</p>

			</Container>

		</div>
	);
};

export default Blogs;