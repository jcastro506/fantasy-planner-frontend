import React, {useState} from 'react' 
import { useHistory } from "react-router-dom"


function Login ({loggedIn, setLoggedIn}){

    const history = useHistory()
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    
    function handleSubmit(){
        setLoggedIn()
        history.push(`/`)
    }


    return (
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
    )
}


export default Login 