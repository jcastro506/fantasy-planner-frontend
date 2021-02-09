import React, {useState} from "react";
import { useHistory } from "react-router-dom"


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
     <div id="home">
            <h1 style={{ color: "firebrick" }}>
                Welcome to Fantasy Planner. Use data to choose your next NBA winner!
            </h1>
         {!loggedIn ?
        <div>
        
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <label for="usernmame">Username:</label>
            <input type="text" id="username" name="username" value={userName} placeholder="..." onChange={e => setUsername(e.target.value)} ></input>
            <label for="lname">Password:</label>
            <input type="password" id="password" name="password" value={password} placeholder="..." onChange={e => setPassword(e.target.value)} ></input>
            <input type="submit" value="Submit"></input>
         </form>
        </div>
        : "Hey Josh!" }

        {!loggedIn ? 
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
        : null }

    </div>
    );
}

export default Home;