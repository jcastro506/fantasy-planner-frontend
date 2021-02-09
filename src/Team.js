import React, {useEffect, useState} from 'react'  
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TeamDetails from './TeamDetails.js'
import EditTeam from './EditTeam.js'
import { Dropdown } from 'primereact/dropdown';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'


function Team ({team, deleteTeam, players, userTeams}) {


    const [selected, setSelected] = useState('')
    const [editClicked, setEditClicked] = useState(false)
    const [playerOne, setPlayerOne] = useState(0)
    const [playerTwo, setPlayerTwo] = useState(0)
    const [playerThree, setPlayerThree] = useState(0)
    const [playerFour, setPlayerFour] = useState(0)
    const [playerFive, setPlayerFive] = useState(0)
    const [teamID, setTeamId] = useState(0)


    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

    const classes = useStyles();


    const eachPlayer = team.players.map(function(player){
        return (player.name)
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
            headers: {
                method: "PATCH",
                headers: {
              'Content-Type': 'application/json'
            },                                                              
            body: JSON.stringify(newPlayerOne)                                        
            }
        })

        //   fetch(`http://localhost:3000/team_builders`, {
        //     headers: {
        //         method: "PATCH",
        //         headers: {
        //       'Content-Type': 'application/json'
        //     },                                                              
        //     body: JSON.stringify(newPlayerTwo)                                        
        //     }
        // })

        //   fetch(`http://localhost:3000/team_builders`, {
        //     headers: {
        //         method: "PATCH",
        //         headers: {
        //       'Content-Type': 'application/json'
        //     },                                                              
        //     body: JSON.stringify(newPlayerThree)                                        
        //     }
        // })

        //   fetch(`http://localhost:3000/team_builders`, {
        //     headers: {
        //         method: "PATCH",
        //         headers: {
        //       'Content-Type': 'application/json'
        //     },                                                              
        //     body: JSON.stringify(newPlayerFour)                                        
        //     }
        // })

        //   fetch(`http://localhost:3000/team_builders`, {
        //     headers: {
        //         method: "PATCH",
        //         headers: {
        //       'Content-Type': 'application/json'
        //     },                                                              
        //     body: JSON.stringify(newPlayerFive)                                        
        //     }
        // })
    }

    // console.log(team.id)
    

    function changeEdit(){
        setEditClicked(!editClicked)
        setTeamId(team.id)
    }
    
    const handleFirstOption = (e) => {
        setPlayerOne(e.target.value)
    }

    console.log(teamID)

    return (
        <div>
        <Card className={classes.root} >
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
                Players: {eachPlayer}
                <br></br>
                Total Points: {totalPoints()}
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
        </Card>
        {editClicked ? 
        <form onSubmit={handleChange} >
            <label>Pick A New Player
                <select 
                name= "players"
                value={playerOne}
                onChange={(e) => setPlayerOne(e.target.value)}>
                    {players.map(function(player){
                        return <option key={player.id} value={player.id}>{player.name}</option>
                    })} 
                </select>
                <select 
                name= "players"
                value={playerTwo}
                onChange={(e) => setPlayerTwo(e.target.value)}>
                    {players.map(function(player){
                        return <option key={player.id} value={player.id}>{player.name}</option>
                    })} 
                </select>
                <select 
                name= "players"
                value={playerThree}
                onChange={(e) => setPlayerThree(e.target.value)}>
                    {players.map(function(player){
                        return <option key={player.id} value={player.id}>{player.name}</option>
                    })} 
                </select>
                <select 
                name= "players"
                value={playerFour}
                onChange={(e) => setPlayerFour(e.target.value)}>
                    {players.map(function(player){
                        return <option key={player.id} value={player.id}>{player.name}</option>
                    })} 
                </select>
                <select 
                name= "players"
                value={playerFive}
                onChange={(e) => setPlayerFive(e.target.value)}>
                    {players.map(function(player){
                        return <option key={player.id} value={player.id}>{player.name}</option>
                    })} 
                </select>              
                
            </label>
            <button>Change Team</button>
        </form>
        : null }
    </div>
 
        )
    }



export default Team