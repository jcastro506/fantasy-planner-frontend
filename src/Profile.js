import React, {useEffect} from 'react' 
import TeamContainer from './TeamContainer.js' 


function Profile ({players, userTeams, loggedIn, deleteTeam, handleNewTeam, setUserTeams}){

    const renderTeams = () => {
        if (userTeams.length > 0){
            let eachTeam = userTeams.map(team =>  {
                return <TeamContainer key={team.id} team={team} deleteTeam={deleteTeam} players={players} handleNewTeam={handleNewTeam} setUserTeams={setUserTeams} />
            })
            return eachTeam
        }
    }
    
    return (
        <div class="flex-container">
            <h2 class="h2">My Teams</h2>
            {renderTeams()}
        </div>
    )
}

export default Profile 