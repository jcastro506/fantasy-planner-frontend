import React, {useState} from 'react' 


function CreateTeam (handleNewTeam){

    const [teamName, setTeamName] = useState("")
    const [playerOne, setPlayerOne] = useState("")
    const [playerTwo, setPlayerTwo] = useState("")
    const [playerThree, setPlayerThree] = useState("")
    const [playerFour, setPlayerFour] = useState("")
    const [playerFive, setPlayerFive] = useState("")


    const newTeam = {
        user_id: 1,
        name: teamName
    }

    const newPlayerOne = {
        // user_id: 1,
        team_id: 14,
        player_id: playerOne
    }

    const newPlayerTwo = {
        team_id: 14,
        player_id: playerTwo
    }

    const newPlayerThree = {
        team_id: 14,
        player_id: playerThree
    }

    const newPlayerFour = {
        team_id: 14,
        player_id: playerFour
    }

    const newPlayerFive = {
        team_id: 14,
        player_id: playerFive
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(e.target)
        // handleNewTeam(newTeam)


        fetch(`http://localhost:3000/teams`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newTeam),
        })
        .then(response => response.json())
        .then()


        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerOne),
        })

        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerTwo),
        })

        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerThree),
        })

        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerFour),
        })

        fetch(`http://localhost:3000/team_builders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlayerFive),
        })
    }


    return (
 
    <div className="">
         <form className="" onSubmit={handleSubmit}>
         <label>Pick your players</label>
            <input type="text" name="teamName" placeholder="what's this teams name?" value={teamName} onChange={e => setTeamName(e.target.value)}/>  
            <input type="text" name="player1" placeholder="scroll through" value={playerOne} onChange={e => setPlayerOne(e.target.value)}/>
            <input type="text" name="player2" placeholder="scroll through" value={playerTwo} onChange={e => setPlayerTwo(e.target.value)}/>
            <input type="text" name="player3" placeholder="scroll through" value={playerThree} onChange={e => setPlayerThree(e.target.value)} />
            <input type="text" name="player4" placeholder="scroll through" value={playerFour} onChange={e => setPlayerFour(e.target.value)} />
            <input type="text" name="player5" placeholder="scroll through" value={playerFive} onChange={e => setPlayerFive(e.target.value)} />
            <button>Add To Team</button>
        </form>
    </div>
    
    )

}


export default CreateTeam