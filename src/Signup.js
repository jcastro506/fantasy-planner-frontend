import React from 'react' 

function Signup () {
    return (
        <div>
            <h3>Signup Below</h3>
        <form>
            <label for="usernmame">Username:</label>
            <input type="text" id="username" name="username" value="" placeholder="Josh"></input>
            <label for="lname">Password:</label>
            <input type="text" id="password" name="password" value="" placeholder="123"></input>
            <input type="submit" value="Submit"></input>
         </form>
    </div>
    )
}

export default Signup 