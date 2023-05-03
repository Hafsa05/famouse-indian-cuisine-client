import React, { createContext } from 'react';

export const AuthProvider = createContext(null);

const AuthProvider = ({children}) => {
	
	const authInfo = {

	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;