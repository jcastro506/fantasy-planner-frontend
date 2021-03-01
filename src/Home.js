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



{/* <Form>
  <Form.Row className="align-items-center">
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Name
      </Form.Label>
      <Form.Control
        className="mb-2"
        id="inlineFormInput"
        placeholder="Jane Doe"
      />
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Username
      </Form.Label>
      <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2"
        label="Remember me"
      />
    </Col>
    <Col xs="auto">
      <Button type="submit" className="mb-2">
        Submit
      </Button>
    </Col>
  </Form.Row>
</Form> */}
        
        
        {/* {!loggedIn ? 
        <div>
            <h3>Signup</h3>
        <form onSubmit={handleSignUp}>
            <label for="usernmame">Username:</label>
            <input type="text" id="username" name="username" value="" placeholder="Josh"></input>
            <label for="lname">Password:</label>
            <input type="text" id="password" name="password" value="" placeholder="123"></input>
            <input type="submit" value="Submit"></input>
         </form>
        </div>
        : null } */}
       

        </div>
    </div>
    );
}

export default Home;