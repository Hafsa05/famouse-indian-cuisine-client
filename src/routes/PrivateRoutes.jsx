import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';


const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	console.log(location);

	if (loading) {
		<Spinner animation="border" variant="primary" />
	}

	if (user) {
		return children;
	}
	return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoutes;