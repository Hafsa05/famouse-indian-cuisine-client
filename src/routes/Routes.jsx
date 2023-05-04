import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../UserInfo/Login";
import Register from "../UserInfo/Register";
import ChefsRecipes from "../pages/Chef/ChefsRecipes/ChefsRecipes";
import ChefsCart from "../pages/Chef/ChefsCart/ChefsCart";
import Blogs from "../pages/Blogs/Blogs";
import UserInfoLayout from "../layouts/UserInfoLayout";
import PrivateRoutes from "./PrivateRoutes";
import TermsCondition from "../UserInfo/TermsCondition";
import ErrorPage from "../errorPage/ErrorPage";


const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
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
				loader: ({ params }) => fetch(`https://famouse-indian-cuisine-server-hafsa-bracuacbd.vercel.app/chef/${params.id}`)
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
		},
		{
			path: '/termscondition',
			element: <TermsCondition></TermsCondition>
		},

		]
	}
]
)

export default router;