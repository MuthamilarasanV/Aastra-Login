import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './LoginForm.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '', phone: '', address: '' });
    const [view, setView] = useState('login');
    const logo = "https://aastratech.com/img/Logo.png";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-background">
            <Container fluid className="h-100">
                <Row className="h-100">
                    {/* Left side with logo and content */}
                    <Col md={7} className="left-panel d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <img
                                className="company-logo mb-4"
                                src={logo}
                                alt="Company Logo"
                            />
                            <h1 className="company-title">Welcome to Our Service</h1>
                            <p className="company-content">
                                Discover our innovative solutions and services. Log in to access your account.
                            </p>
                        </div>
                    </Col>

                    {/* Right side with login form */}
                    <Col md={5} className="right-panel d-flex align-items-center justify-content-center">
                        <div className="login-box">
                            {view === 'login' && (
                                <>
                                    <h4 className="mb-4 text-center">Login</h4>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder="Enter your username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formBasicCheckbox" className="align-items-center">
                                            <Col xs="auto">
                                                <Form.Check type="checkbox" label="Remember me" />
                                            </Col>
                                        </Form.Group>

                                        <div className="text-center">
                                            <Button variant="primary" type="submit" className="login-button">
                                                Log In
                                            </Button>
                                        </div>
                                    </Form>

                                    <div className="mt-3 text-center">
                                        <a href="#" onClick={() => setView('forgot-password')} className="d-block">
                                            Forgot Password?
                                        </a>
                                        <span className="mx-2">|</span>
                                        <a href="#" onClick={() => setView('create-account')}>
                                            Create Account
                                        </a>
                                    </div>
                                </>
                            )}

                            {view === 'forgot-password' && (
                                <>
                                    <h4 className="mb-4 text-center">Forgot Password</h4>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder="Enter your username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="login-button">
                                            Reset Password
                                        </Button>
                                    </Form>

                                    {/* Links to switch forms */}
                                    <div className="mt-3 text-center">
                                        <a href="#" onClick={() => setView('login')} className="d-block">
                                            Back to Login
                                        </a>
                                    </div>
                                </>
                            )}

                            {view === 'create-account' && (
                                <>
                                    <h4 className="mb-4 text-center">Create Account</h4>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group controlId="formUsername">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="username"
                                                placeholder="Enter your username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="phone"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="formAddress">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="address"
                                                placeholder="Enter your address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" className="login-button">
                                            Create Account
                                        </Button>
                                    </Form>

                                    {/* Links to switch forms */}
                                    <div className="mt-3 text-center">
                                        <a href="#" onClick={() => setView('login')} className="d-block">
                                            Back to Login
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginForm;
