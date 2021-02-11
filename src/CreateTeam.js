import React, {useState} from 'react' 


function CreateTeam ({handleNewTeam}){

    const [teamName, setTeamName] = useState("")
    const [playerOne, setPlayerOne] = useState("")
    const [playerTwo, setPlayerTwo] = useState("")
    const [playerThree, setPlayerThree] = useState("")
    const [playerFour, setPlayerFour] = useState("")
    const [playerFive, setPlayerFive] = useState("")
    const [teamId, setTeamID] = useState(0)

// console.log("before post", teamId)

    function updateId (){
        setTeamID(teamId + 1)
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target)

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
    }

        // updateId()
        // console.log("after post", teamId)

    console.log("outside of function", teamId)

    return (
 
    <div className="">
         <form className="" onSubmit={handleSubmit}>
         <label>Name Your Team</label>
            <input type="text" name="teamName" placeholder="what's this teams name?" value={teamName} onChange={e => setTeamName(e.target.value)}/> 
            <button>Create Team</button> 
        </form>
        <form onSubmit={addPlayers}>
            <label>Choose Your Players</label>
            <input type="text" name="player1" placeholder="Player ID" value={playerOne} onChange={e => setPlayerOne(e.target.value)}/>
            <input type="text" name="player2" placeholder="Player ID" value={playerTwo} onChange={e => setPlayerTwo(e.target.value)}/>
            <input type="text" name="player3" placeholder="Player ID" value={playerThree} onChange={e => setPlayerThree(e.target.value)} />
            <input type="text" name="player4" placeholder="Player ID" value={playerFour} onChange={e => setPlayerFour(e.target.value)} />
            <input type="text" name="player5" placeholder="Player ID" value={playerFive} onChange={e => setPlayerFive(e.target.value)} />
            <button>Add Players</button>
        </form>
    </div>
    
    )

}


export default CreateTeam