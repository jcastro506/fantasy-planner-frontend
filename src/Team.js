import React, {useEffect, useState} from 'react'  
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TeamDetails from './TeamDetails.js'
import EditTeam from './EditTeam.js'
import { Dropdown } from 'primereact/dropdown';
import Player from './Player.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Navbar'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'



function Team ({team, deleteTeam, players, handleNewTeam, setUserTeams}) {


    const [selected, setSelected] = useState('')
    const [editClicked, setEditClicked] = useState(false)
    const [playerOne, setPlayerOne] = useState(0)
    const [playerTwo, setPlayerTwo] = useState(0)
    const [playerThree, setPlayerThree] = useState(0)
    const [playerFour, setPlayerFour] = useState(0)
    const [playerFive, setPlayerFive] = useState(0)
    const [teamID, setTeamId] = useState(0)
    const [releasedPlayer, setReleasedPlayer] = useState(null)


    const data1 = [3642, 2238, 68, 432, 716,
     2805, 1800, 60, 356, 447,
     2500, 1013, 66, 420, 700,
     3100, 2221, 72, 522, 629,
     2865, 1255, 61, 375, 891
    ]

    const randomData = () => {
        return data1[Math.floor(Math.random() * data1.length)]
    }


    function handleRelease(e){
        e.preventDefault()
        console.log(e.target.value)
    }

    const eachPlayer = () => team.team_builders.map(function(builder){
        return <Player key={builder.id} builder={builder} setUserTeams={setUserTeams}/>
    })


    const allPlayers = team.players.map(function(player){
        return (
            <div>
                <ul>
                    <li class="playerNames">{player.name}</li>
                </ul>

           </div>
        )
    })

    
    function totalPoints(){
        let totalPoints = 0
        team.players.map(function(player){
            totalPoints += player.fantasy_points
        })
        return totalPoints
    }


    function handleDelete(e){
        fetch(`http://localhost:3000/teams/${team.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => {
            deleteTeam(team.id)
        })
    }


    function handleChange(e){
        e.preventDefault()

        const newPlayerOne = {
            team_id: teamID,
            player_id: playerOne
        }

    
        fetch(`http://localhost:3000/team_builders`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPlayerOne),
          })
          .then((r) => r.json())
          .then((user) => {
            fetch("http://localhost:3000/users/1")
            .then((r) => r.json())
            .then((user) => setUserTeams(user.teams))
          })
    }
    
    
    function changeEdit(){
        setEditClicked(!editClicked)
        setTeamId(team.id)
    }
    console.log(teamID)
    
    const handleFirstOption = (e) => {
        setPlayerOne(e.target.value)
    }


    function handlePlayerRelease(e){
        e.preventDefault()
        
        console.log(releasedPlayer)

        if (releasedPlayer){
        fetch(`http://localhost:3000/players/${releasedPlayer}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then((user) => {
        })
    }
        else {
        return null
        }
    }

    return (
    <div class="teamCards">
        <div class="eachCard">
        <Card class="teamCards" style={{ width: '32rem' }}>
        <Card.Img variant="top" src="https://www.wkbn.com/wp-content/uploads/sites/48/2020/11/national-basketball-association-logo.jpg?w=1280" />
        <Card.Body>
            <Card.Title>{team.name}</Card.Title>
            <Card.Text class="row justify-content-center">
            {allPlayers}
            {/* {eachPlayer()} */}
            <br></br>
            <br></br>
            Projected Total Points: {totalPoints()}
            </Card.Text>
            <div class="editteam">
            <Button onClick={changeEdit} size="small" color="primary" variant="dark">{' '}
            Pickup/Release Player
            </Button>
            </div>
            <br></br>
            <div>
            <Button onClick={handleDelete} size="small" color="primary" variant="dark" id={team.id}>{' '}
            Delete
            </Button>
            <br></br>
            <br></br>
            <Link to={`/teams/${team.id}`}>See Stats</Link>
            </div>
        </Card.Body>
        </Card>
        </div>
        {editClicked ? 
        <div>
        <form onSubmit={handleChange} >
            <label class="releaseList">
                <select 
                name= "players"
                value={playerOne}
                onChange={(e) => setPlayerOne(e.target.value)}>
                    {players.map(function(player){
                        return <option key={player.id} value={player.id}>{player.name}</option>
                    })} 
                </select>
            </label>
            <button class="createbutton">Pick Up</button>
        </form>
        <form onSubmit={handlePlayerRelease} >
            <br></br>
            <label class="releaseList">Release A Player
                <br></br>
                <ol class="releaseList">
                    <br></br>
                    {team.players.map(function(player){return <li>{player.name}</li>})}<br></br>{eachPlayer()}
                </ol>
            </label>
        </form>
    </div>
        : null }
    </div>
        )
    }



export default Team