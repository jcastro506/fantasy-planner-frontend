import React from 'react' 
import Login from './Login.js'
import { Link } from "react-router-dom"



function NavBar (){

    return (
        <div>
            <h1>Welcome To Fantasy Planner!</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/news">News</Link>
        </div>
    )

}


export default NavBar