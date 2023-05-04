import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { user, signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';

    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        // setSuccess('');
        // setErrors('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        if (password < 6) {
            setErrors('Please set password having at least 6 characters')
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setErrors(error.message);
                setSuccess('');
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error.message));
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error.message));
    }


    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="outline-primary" type="submit">
                    Login
                </Button>
                <br />
                <div className='align-item-center'>
                    <hr />
                    <p><small>Or use any of these options</small></p>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button> <br />
                    <Button onClick={handleGithubSignIn} variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
                </div>
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Please Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">
                    <p>{errors}</p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;