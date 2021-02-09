import React, {useEffect} from 'react' 
import TeamContainer from './TeamContainer.js' 


function Profile ({players, userTeams, loggedIn, deleteTeam}){

    const renderTeams = () => {
        if (userTeams.length > 0){
            console.log("Im working here ")
            let eachTeam = userTeams.map(team =>  {
                return <TeamContainer key={team.id} team={team} deleteTeam={deleteTeam} players={players} userTeams={userTeams} />
            })
            return eachTeam
        // console.log(eachTeam)
        }
    }
    
    return (
        <div>
            <h3>My Teams</h3>
            {renderTeams()}
        </div>
    )
}

export default Profile 