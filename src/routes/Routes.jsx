import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../UserInfo/Login";
import Register from "../UserInfo/Register";
import ChefsRecipes from "../pages/Chef/ChefsRecipes/ChefsRecipes";
import ErrorPage from "../errorPage/ErrorPage";
import ChefsCart from "../pages/Chef/ChefsCart/ChefsCart";
import Blogs from "../pages/Blogs/Blogs";
import UserInfoLayout from "../layouts/UserInfoLayout";
import PrivateRoutes from "./PrivateRoutes";


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
			// {
			// 	path: '/login',
			// 	element: <Login></Login>
			// },
			// {
			// 	path: '/register',
			// 	element: <Register></Register>
			// },
			{
				path: '/blogs',
				element: <PrivateRoutes><Blogs></Blogs></PrivateRoutes>
			},
			{
				path: '/chef/:id',
				element: <PrivateRoutes><ChefsRecipes></ChefsRecipes></PrivateRoutes>,
				loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
			},
			
		]
	},
	{
		path: '/',
		element: <UserInfoLayout></UserInfoLayout> ,
		children: [{
			path: 'login',
			element: <Login></Login>
		},
		{
			path: 'register',
			element: <Register></Register>
		}
	
		// {
		// 	path: 'terms',
		// 	element: 
		// }

		]
	}
]
)

export default router;