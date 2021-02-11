import React from 'react' 
import Login from './Login.js'
import { Link } from "react-router-dom"



function NavBar ({loggedIn, changeLogin}){

function handleClick(){
    changeLogin()
}

    return (
        <div>
            <h1>INSERT LOGO</h1>
            <div>
            {loggedIn ?
                <Link to="/">Home</Link>
                : null }
                {loggedIn ?
                <Link to="/news">News</Link>
                : null }
                {loggedIn ? 
                <Link to="/players">Players</Link>
                : null }
                {loggedIn ? 
                <Link to="/profile">Profile</Link>
                : null }
                {loggedIn ? 
                <Link to="/teamComparer">Compare Team Stats</Link>
                : null }
            </div>
            <div>
            {loggedIn ? 
            <Link onClick={handleClick} to="/">Logout</Link>
            : null }
            </div>
            <br></br>
            <br></br>
        </div>
    )

}


export default NavBar