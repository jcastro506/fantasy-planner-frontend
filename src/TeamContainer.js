import React from 'react' 
import Team from './Team.js'


function TeamContainer ({team, deleteTeam, players, userTeams}){

    

   return (
       <div>
           <Team key={team.id} team={team} deleteTeam={deleteTeam} players={players} userTeams={userTeams} />
       </div>
   )
    
}


export default TeamContainer