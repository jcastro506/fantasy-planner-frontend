import React from 'react' 
import { Redirect } from "react-router-dom"
import Button from '@material-ui/core/Button';


function Logout ({ changeLogin }) { 

    function handleClick(){
        changeLogin()
    }

    return (
        <Button onClick={handleClick}>Logout</Button>
    )

}


export default Logout 