import React, {useEffect} from 'react' 
import TeamContainer from './TeamContainer.js' 


function Profile ({players, userTeams, loggedIn, deleteTeam, handleNewTeam}){

    const renderTeams = () => {
        if (userTeams.length > 0){
            let eachTeam = userTeams.map(team =>  {
                return <TeamContainer key={team.id} team={team} deleteTeam={deleteTeam} players={players} handleNewTeam={handleNewTeam} />
            })
            return eachTeam
        }
    }
    
    return (
        <div>
            <h2 class="myTeams">My Teams</h2>
            {renderTeams()}
        </div>
    )
}

export default Profile 