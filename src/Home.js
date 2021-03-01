import React, {useState} from "react";
import About from './About.js'
import { useHistory, Redirect } from "react-router-dom"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import News from './News.js'



function Home({loggedIn, setLoggedIn}) {


    const history = useHistory()
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [newUser, setNewUser] = useState("")
    const [newPass, setNewPass] = useState("")

    
    function handleSubmit(){
        setLoggedIn()
        history.push(`/`)
    }

    function handleSignUp(){

        const signUpUser = {
            username: newUser,
            password: newPass
        }

        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(signUpUser),
        })
        .then(response => response.json())
        .then()
    }


    return (
<div class="homeBody">
     <div id="home">
        
        {!loggedIn ? 
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label color="white" >Username or Email</Form.Label>
            <Form.Control type="username" placeholder="Enter Username or Email" className="mb-2"
        id="inlineFormInput"/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
            Login
        </Button>
        </Form>
        : <Redirect to="/news"/> }

        </div>
    </div>
    );
}

export default Home;