import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../UserInfo/Login";
import Register from "../UserInfo/Register";
import ChefsRecipes from "../pages/Chef/ChefsRecipes/ChefsRecipes";
import ErrorPage from "../errorPage/ErrorPage";
import ChefsCart from "../pages/Chef/ChefsCart/ChefsCart";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		// errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>
			},
			{
				path: '/login',
				element: <Login></Login>
			},
			{
				path: '/register',
				element: <Register></Register>
			},
			{
				path: '/blogs',
				element: <Blogs></Blogs>
			},
			{
				path: '/chef/:id',
				element: <ChefsRecipes></ChefsRecipes>,
				loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
			},
			{
				path: '/chef',
				element: <ChefsCart></ChefsCart>,
				loader: ({ params }) => fetch(`http://localhost:5000/chef/${params}`)
			}
		]
	},
	// {
	// 	path: '/ch',
	// }
])

export default router;