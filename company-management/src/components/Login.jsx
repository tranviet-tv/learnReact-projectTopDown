import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate()
    const { setIsAuthenticated, setUser } = useContext(AuthContext)
    const [loginData, setLoginData] = useState({ userName: '', password: '' })
    const [validated, setValidated] = useState(false)


    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setValidated(true)
        setIsAuthenticated(true)
        setUser({ useName: loginData.userName })
        navigate('/')
    }

    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit} validated={validated}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                        name="userName"
                        value={loginData.userName}
                        onChange={handleChange}
                        required></Form.Control>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                        required></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}