import React, {useState} from 'react' 
import Login from './Login.js'
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"



function NavBar ({loggedIn, setLogin}){


 


function handleClick(){
    setLogin()
}



    return (
        // <div>
        //     <h1>INSERT LOGO</h1>
        //     <div>
        //     {loggedIn ?
        //         <Link to="/">Home</Link>
        //         : null }
        //         {loggedIn ?
        //         <Link to="/news">News</Link>
        //         : null }
        //         {loggedIn ? 
        //         <Link to="/players">Players</Link>
        //         : null }
        //         {loggedIn ? 
        //         <Link to="/profile">Profile</Link>
        //         : null }
        //         {loggedIn ? 
        //         <Link to="/teamComparer">Compare Team Stats</Link>
        //         : null }
        //     </div>
        //     <div>
        //     {loggedIn ? 
        //     <Link onClick={handleClick} to="/">Logout</Link>
        //     : null }
        //     </div>
        //     <br></br>
        //     <br></br>
        // </div>
    <div class="navbar">
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://seeklogo.com/images/B/basketball-logo-15048F5611-seeklogo.com.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
      />{' '} Fantasy Planner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/players">Players</NavDropdown.Item>
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/teamComparer">Compare Teams</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleClick} href="/">Logout</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
    </div>
    )

}


export default NavBar