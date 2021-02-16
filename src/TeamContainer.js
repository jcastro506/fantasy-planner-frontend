import React from 'react' 
import Team from './Team.js'


function TeamContainer ({team, deleteTeam, players, handleNewTeam, setUserTeams}){

    console.log(team)

   return (
       <div>
           <Team key={team.id} team={team} deleteTeam={deleteTeam} players={players} handleNewTeam={handleNewTeam} setUserTeams={setUserTeams}/>
       </div>
   )
    
}


export default TeamContainer