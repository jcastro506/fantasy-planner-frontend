import React from 'react' 

function Login (){

    return (
    <div>
        <form>
            <label for="usernmame">Username:</label>
            <input type="text" id="username" name="username" value="" placeholder="..."></input>
            <label for="lname">Password:</label>
            <input type="text" id="password" name="password" value="" placeholder="..."></input>
            <input type="submit" value="Submit"></input>
         </form>
    </div>
    )
}


export default Login 