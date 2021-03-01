import React, {useState, useEffect} from 'react' 
import { Chart } from 'primereact/chart'
// import { useParams } from "react-router-dom"


function TeamComparer ({userTeams}){

    const [teamOne, setTeamOne] = useState(null)
    const [teamTwo, setTeamTwo] = useState(null)
    const [teamOneName, setTeamOneName] = useState(null)
    const [teamTwoName, setTeamTwoName] = useState(null)
    const [clicked, setClicked] = useState(false)
 

    function handleChange(e){
        e.preventDefault()
    }

    
    const totalArr = []
    const totalArrTwo = []


    function teamOneFunc (){
        if (teamOne)  {
            let pointsArr = 0
            let reboundsArr = 0
            let fieldGoalArr = 0
            let fantasytPointsArr = 0
            let minutesArr = 0
            teamOne.players.map((player) => {
                console.log(player)
                pointsArr += player.points
                reboundsArr += player.rebounds
                fieldGoalArr += player.field_goal_percentage
                fantasytPointsArr += player.fantasy_points
                minutesArr += player.minutes_played
            })
            totalArr.push(pointsArr, reboundsArr, fieldGoalArr/teamOne.players.length, fantasytPointsArr, minutesArr)
        }
    }


    function teamTwoFunc (){
        if (teamTwo)  {
            let pointsArr = 0
            let reboundsArr = 0
            let fieldGoalArr = 0
            let fantasytPointsArr = 0
            let minutesArr = 0
            teamTwo.players.map((player) => {
                pointsArr += player.points
                reboundsArr += player.rebounds
                fieldGoalArr += player.field_goal_percentage
                fantasytPointsArr += player.fantasy_points
                minutesArr += player.minutes_played
            })
            totalArrTwo.push(pointsArr, reboundsArr, fieldGoalArr/teamTwo.players.length, fantasytPointsArr, minutesArr)
            return totalArrTwo
        }
    }

    useEffect(() => {
        console.log(teamOne)
        teamOneFunc()
    }, [teamOne])

    useEffect(() => {
        console.log(teamTwo)
        teamTwoFunc()
    }, [teamTwo])


    function handleClick (){
        setClicked(!clicked)
    }


    function handleTeamOneChange (teamId){
     let foundTeam = userTeams.filter(team => team.id === parseInt(teamId))
        setTeamOne(foundTeam[0])
        setTeamOneName(foundTeam[0].name)
    }

    function handleTeamTwoChange(teamId){
        let foundTwoTeam = userTeams.filter(team => team.id === parseInt(teamId))
        setTeamTwo(foundTwoTeam[0])
        setTeamTwoName(foundTwoTeam[0].name)
    }

    function handleNames (){
        if (teamOne){
            return teamOne.name
        }
        else {
            return null
        }
    }

    function handleNameTwo (){
        if (teamTwo){
            return teamTwo.name
        }
        else {
            return null
        }
    }


    teamOneFunc()
    teamTwoFunc()
    

    const chartData = {
        labels: ['NBA Points', 'Rebounds', 'Field Goal Percentage ', 'Fantasy Points', 'Minutes Played'],
        datasets: [
            {
                label: `${handleNames()}`, 
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#ffffff',
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: '#ffffff',
                data: totalArr
            },
            {
                label: `${handleNameTwo()}`,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: totalArrTwo
            }
        ]
    };

    const lightOptions = {
        legend: {
            labels: {
                fontColor: '#ffffff'
            }
        },
        scale: {
            pointLabels: {
                fontColor: '#ffffff'
            },
            gridLines: {
                color: '#ebedef'
            }
        }
    };


    return (
    <div>
        <h2 class="h2">Compare Teams</h2>
        <form onSubmit={handleChange} >
            <label>
                <select 
                name= "players"
                value={teamOne}
                onChange={(e) => handleTeamOneChange(e.target.value)}>
                    {userTeams.map(function(team){
                        return <option key={team.id} value={team.id}>{team.name}</option>
                    })} 
                </select>
                <select 
                name= "players"
                value={teamTwo}
                onChange={(e) => handleTeamTwoChange(e.target.value)}>
                    {userTeams.map(function(team){
                        return <option key={team.id} value={team.id}>{team.name}</option>
                    })} 
                </select>
            </label>
            <br></br>
         </form>
       <br></br> 
       <div className="chart">
        <Chart type="radar" data={chartData} options={lightOptions} />
        </div> 
    </div>
    )
}


export default TeamComparer