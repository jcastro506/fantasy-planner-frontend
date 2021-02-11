import React, {useState} from 'react' 


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
            {/* {player.name} */}
            <button key={builder.id} value={builder.id}>Release</button>
        </div>
    )   


}

export default Player