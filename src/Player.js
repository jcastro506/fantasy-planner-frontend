import React, {useState} from 'react' 
import Button from 'react-bootstrap/Button'


function Player ({builder}){

        function handleSubmit(e){

            e.preventDefault()
            const builderId = e.target.value

            fetch(`http://localhost:3000/team_builders/${builderId}`, {
                method: "DELETE"
            })
            .then(r => r.json())
            .then(() => {
                console.log("finished")
            })
        }


    return (
        <div onClick={handleSubmit}>
            <button class="small-btn" key={builder.id} value={builder.id} size="small">Release Player</button>
        </div>
    )   


}

export default Player