import React, {useEffect, useState} from 'react'  
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TeamDetails from './TeamDetails.js'
import EditTeam from './EditTeam.js'
import { Dropdown } from 'primereact/dropdown';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography'
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

    // const useStyles = makeStyles({
    //     root: {
    //       maxWidth: 345,
    //     },
    //     media: {
    //       height: 140,
    //     },
    //   });

    // const classes = useStyles();

    function handleRelease(e){
        e.preventDefault()
        console.log(e.target.value)
            
        // const builderId = e.target.value

        //  fetch(`http://localhost:3000/team_builders/${builderId}`, {
        //         method: "DELETE"
        //     })
        //     .then(r => r.json())
        //     .then(() => {
        //         console.log("finished")
        //     })
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

        console.log(e.target)

        console.log(newPlayerOne)
    

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
    
    


        //   fetch(`http://localhost:3000/team_builders`, {
        //     headers: {
        //         method: "PATCH",
        //         headers: {
        //       'Content-Type': 'application/json'
        //     },                                                              
        //     body: JSON.stringify(newPlayerTwo)                                        
        //     }
        // })
    

    // console.log(team.id)
    

    function changeEdit(){
        setEditClicked(!editClicked)
        setTeamId(team.id)
        console.log(team)
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
            console.log(user)
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

        {/* <Card className={classes.root} >
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg"
            title={team.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {team.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Players: {allPlayers} {eachPlayer()} 
                <br></br>
                Projected Total Points: {totalPoints()}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button onClick={changeEdit} size="small" color="primary">
            Edit
            </Button>
            <Button onClick={handleDelete} size="small" color="primary" id={team.id}>
            Delete
            </Button>
            <Link to={`/teams/${team.id}`}>See Stats</Link>
        </CardActions>
        </Card> */}
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
            <button>Pick Up</button>
        </form>
        <form onSubmit={handlePlayerRelease} >
            <br></br>
            <label class="releaseList">Release A Player
                <br></br>
                <ol class="releaseList">
                    <br></br>
                    {team.players.map(function(player){return <li>{player.name}</li>})}<br></br>{eachPlayer()}
                </ol>
                {/* {eachPlayer()} */}
            </label>
        </form>
    </div>
        : null }
    </div>
        )
    }



export default Team