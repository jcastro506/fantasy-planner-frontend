import React from 'react' 
import Team from './Team.js'


function TeamContainer ({team, deleteTeam, players, handleNewTeam}){

    console.log(team)

   return (
       <div>
           <Team key={team.id} team={team} deleteTeam={deleteTeam} players={players} handleNewTeam={handleNewTeam} />
       </div>
   )
    
}


export default TeamContainer