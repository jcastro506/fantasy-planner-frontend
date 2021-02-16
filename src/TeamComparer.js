import React, {useState, useEffect} from 'react' 
import { Chart } from 'primereact/chart'
// import { useParams } from "react-router-dom"


function TeamComparer ({userTeams}){

    const [teamOne, setTeamOne] = useState(null)
    const [teamTwo, setTeamTwo] = useState(null)
    const [teamOneName, setTeamOneName] = useState(null)
    const [teamTwoName, setTeamTwoName] = useState(null)
    const [clicked, setClicked] = useState(false)
 

    // const data1 = [3642, 4238, 4300, 4432, 4016]
    // const data2 = [4805, 4800, 3460, 3656, 4968]
    // const data3 = [3500, 4013, 3156, 3920, 2900]
    // const data4 = [3100, 4221, 4102, 3922, 4129]
    // const data5 = [3865, 3255, 4011, 3875, 3991]

    // let random = data1.sort(() => .5 - Math.random()).slice(0,5)
    // let randomTwo = data1.sort(() => .5 - Math.random()).slice(0,5)



    function handleChange(e){
        e.preventDefault()

        console.log(teamOne)

    }

    // function getData (){
    //     if (teamOne === "Josh's Allstars"){
    //         return data1
    //     }
    //     else if (teamOne === "Dream Team"){
    //         return data2 
    //     }
    //     else if (teamOne === "Kevin's Team"){
    //         return data3
    //     }
    //     else if (teamOne === "Annie's Allstars"){
    //         return data4
    //     }
    //     else{
    //         return data5
    //     }
    // }
    const totalArr = []
    const totalArrTwo = []


    function teamOneFunc (){
        if (teamOne)  {
            console.log(teamOne)
            // let totalArr = []
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
            console.log(totalArr)
            // return totalArr
        }
    }


    function teamTwoFunc (){
        if (teamTwo)  {
            console.log(teamTwo)
            // let totalArr = []
            let pointsArr = 0
            let reboundsArr = 0
            let fieldGoalArr = 0
            let fantasytPointsArr = 0
            let minutesArr = 0
            teamTwo.players.map((player) => {
                console.log(player)
                pointsArr += player.points
                reboundsArr += player.rebounds
                fieldGoalArr += player.field_goal_percentage
                fantasytPointsArr += player.fantasy_points
                minutesArr += player.minutes_played
            })
            totalArrTwo.push(pointsArr, reboundsArr, fieldGoalArr/teamTwo.players.length, fantasytPointsArr, minutesArr)
            // console.log(totalArrTwo)
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
        // console.log(foundTwoTeam)
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
    // console.log(userTeams)
    // console.log(teamOne)
    // console.log(teamTwo)
    console.log(totalArr)
    console.log(totalArrTwo)

    const chartData = {
        labels: ['NBA Points', 'Rebounds', 'Field Goals Made', 'Fantasy Points', 'Minutes Played'],
        datasets: [
            {
                label: `${handleNames()}`, 
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
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
                fontColor: '#495057'
            }
        },
        scale: {
            pointLabels: {
                fontColor: '#495057'
            },
            gridLines: {
                color: '#ebedef'
            }
        }
    };


    return (
    <div>
        <form onSubmit={handleChange} >
            <label>Pick Two Teams
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
       <div className="card">
        <Chart type="radar" data={chartData} options={lightOptions} />
        </div> 
    </div>
    )
}


export default TeamComparer