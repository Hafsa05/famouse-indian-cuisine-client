import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	}

	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	}

	const githubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	}

	// const userUpdateProfile = () =>{
	// 	updateProfile(user, {
	// 		displayName: { user.displayName }, photoURL: { user.photoURL }
	// 	})
	// }


	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, loggedUser => {
			console.log("logged in user inside auth state observer", loggedUser);
			setUser(loggedUser);
			setLoading(false);
		})
		return () => {
			unsubscribe();
		}
	}, [])

	const authInfo = {
		user,
		createUser,
		signIn,
		logOut,
		loading,
		googleSignIn,
		githubSignIn

	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;