import React, {useState} from 'react' 
import Button from 'react-bootstrap/Button'


function Player ({builder, setUserTeams}){

        function handleSubmit(e){

            e.preventDefault()
            const builderId = e.target.value

            fetch(`http://localhost:3000/team_builders/${builderId}`, {
                method: "DELETE"
            })
            .then(r => r.json())
            .then(() => {
                fetch("http://localhost:3000/users/1")
                .then((r) => r.json())
                .then((user) => setUserTeams(user.teams))
              })
        }


    return (
        <div onClick={handleSubmit}>
            <Button class="small-btn" key={builder.id} value={builder.id} size="small" color="primary" variant="light">Release Player</Button>
            <br></br>
            <br></br>
        </div>
    )   


}

export default Player