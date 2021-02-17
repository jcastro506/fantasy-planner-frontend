import Button from 'react-bootstrap/Button'
import React, {useState} from 'react' 
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'


function CreateTeam ({handleNewTeam}){

    const [teamName, setTeamName] = useState("")
    const [playerOne, setPlayerOne] = useState("")
    const [playerTwo, setPlayerTwo] = useState("")
    const [playerThree, setPlayerThree] = useState("")
    const [playerFour, setPlayerFour] = useState("")
    const [playerFive, setPlayerFive] = useState("")
    const [teamId, setTeamID] = useState(0)
    const [clicked, setClicked] = useState(false)

// console.log("before post", teamId)

    function updateId (){
        setTeamID(teamId + 1)
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target)
        setClicked(!clicked)

        const newTeam = {
            user_id: 1,
            name: teamName
        }

        fetch(`http://localhost:3000/teams`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newTeam),
        })
        .then(response => response.json())
        .then(data => {
        handleNewTeam(data)
        setTeamID(data.id)
        })

    }

    function addPlayers(e){

        e.preventDefault()

        setClicked(!clicked)

        const newPlayerOne = {
            team_id: (teamId),
            player_id: playerOne
        }
    
        const newPlayerTwo = {
            team_id: (teamId),
            player_id: playerTwo
        }
    
        const newPlayerThree = {
            team_id: (teamId),
            player_id: playerThree
        }
    
        const newPlayerFour = {
            team_id: (teamId),
            player_id: playerFour
        }
    
        const newPlayerFive = {
            team_id: (teamId),
            player_id: playerFive
        }

        // console.log("after Post", teamId)

        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerOne)
        })

        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerTwo)
        })

        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerThree)
        })

        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerFour)
        })

        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerFive)
        })

        alert(`${teamName} is in your profile!`)
    }

        // updateId()
        // console.log("after post", teamId)

    console.log("outside of function", teamId)


    return (
    <div class="row justify-content-center">
        {/* <div class="row justify-content-center">
        <Form>
        <Form.Group controlId="name">
            <Form.Label>Name Your Team</Form.Label>
            <Form.Control type="text" placeholder="Team Name" value={teamName} onChange={e => setTeamName(e.target.value)}/>
            <button id="button" onSubmit={handleSubmit}>Create Team</button>
        </Form.Group>
        </Form>
        </div> */}
        <div>
            <h2 class="h2">Create A Team</h2>
         <form className="teamName" onSubmit={handleSubmit}>
            {/* <label>Name Your Team</label> */}
            <input type="text" name="teamName" placeholder="Team Name" value={teamName} onChange={e => setTeamName(e.target.value)}/> 
            <button variant="light">Create Team</button> 
        </form>
        </div>
        <br></br>
        {clicked ? 
        <div class="addPlayers">
            <form onSubmit={addPlayers}>
                <label>Choose Your Players</label>
                <input type="text" name="player1" placeholder="Player ID" value={playerOne} onChange={e => setPlayerOne(e.target.value)}/>
                <input type="text" name="player2" placeholder="Player ID" value={playerTwo} onChange={e => setPlayerTwo(e.target.value)}/>
                <input type="text" name="player3" placeholder="Player ID" value={playerThree} onChange={e => setPlayerThree(e.target.value)} />
                <input type="text" name="player4" placeholder="Player ID" value={playerFour} onChange={e => setPlayerFour(e.target.value)} />
                <input type="text" name="player5" placeholder="Player ID" value={playerFive} onChange={e => setPlayerFive(e.target.value)} />
                <button variant="light">Add Players</button>
            </form>
        </div>
            : null}
     </div>
    )

}


export default CreateTeam