import React, { useState, useEffect } from 'react' 
import { useParams } from "react-router-dom"
import { Chart } from 'primereact/chart'



function TeamDetails ({userTeams}){

    const [team, setTeam] = useState(null)

    // const data1 = [4642, 4638, 4700, 4632, 4551, 5039, 4798, 4545, 4345, 4375, 4869, 4587, 4654, 4733, 4540, 4805, 4800, 4560, 4656, 4968]
    // const data2 = [2869, 1587, 164, 5733, 5540]
    // const data3 = [5805, 1400, 346, 9656, 13068]
    // const data4 = [6793, 1667, 341, 11467, 12415]
    // const data5 = [7039, 2098, 345, 13145, 13575]

    // let random = data1.sort(() => .5 - Math.random()).slice(0,5)



    const params = useParams()
    console.log(params)


    useEffect(() => {
        fetch(`http://localhost:3000/teams/${params.id}`)
            .then(r => r.json())
            .then(data => setTeam(data)
            )
    }, [params.id])

    let totalArr = []

    function teamFunc (){
        if (team)  {
            console.log(team)
            // let totalArr = []
            let pointsArr = 0
            let reboundsArr = 0
            let fieldGoalArr = 0
            let fantasytPointsArr = 0
            let minutesArr = 0
            team.players.map((player) => {
                console.log(player)
                pointsArr += player.points
                reboundsArr += player.rebounds
                fieldGoalArr += player.field_goal_percentage
                fantasytPointsArr += player.fantasy_points
                minutesArr += player.minutes_played
            })
            totalArr.push(pointsArr, reboundsArr, fieldGoalArr/team.players.length, fantasytPointsArr, minutesArr)
            console.log(totalArr)
            return totalArr
        }
    }

    function teamNameFunc (){
        if (team){
            return team.name
        }
    }


    teamFunc()
    
    const chartData = {
        labels: ['League Points', 'Rebounds', 'Field Goal Percentage', 'Assists', 'Minutes'],
        datasets: [
            {
                    label: `${teamNameFunc()}`,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: totalArr
                }
        ]
    };


    function totalPoints(){
        let totalPoints = 0
        team.players.map(function(player){
            totalPoints += player.fantasy_points
        })
        console.log(totalPoints)
        return totalPoints
    }
    

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
        // <div className="project-item">
        //     {getStats()}
        // </div>
        <div className="card">
            <Chart type="radar" data={chartData} options={lightOptions} />
        </div> 
    )
}


export default TeamDetails