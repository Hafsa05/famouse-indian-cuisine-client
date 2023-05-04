import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {

    const { user, createUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);
    const navigation = useNavigate();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        // setSuccess('');
        // setErrors('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        if (password < 6) {
            if (error.message == 'auth/error') {
                setError('Please set password having at least 6 characters')
            }
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigation('/login');
                setError('');
                form.reset('');
                setSuccess('Welcome to our website!!..')
            })
            .catch(error => {
                // console.error(error.message);
                setError(error.message);
                setSuccess('');
            })

    }

    // userUpdateProfile(user.displayName, user.photoURL)
    //     .then(result => {
    //         console.log(user.displayName, user.photoURL)
    //     })
    //     .catch(error => {
    //         setError(error);
    //         setSuccess('');
    //     })


    const handleAccept = event => {
        setAccept(event.target.checked);
    }

    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Enter password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccept}
                        type="checkbox"
                        name="accept"
                        label={<>Accept our <Link to="/termscondition">Terms and Conditions</Link> </>} />
                </Form.Group>

                <Button variant="outline-primary" disabled={!accept} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Please Login</Link>
                </Form.Text>
                {/* <div className='align-center'>
                    <hr />
                    <p><small>Or use any of these options</small></p>
                    <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Registration with Google</Button> <br />
                    <Button variant="outline-secondary"> <FaGithub></FaGithub> Registration with Github</Button>
                </div> */}

                <Form.Text className="text-success">
                    <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;