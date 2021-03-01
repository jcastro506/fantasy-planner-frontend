import React, { useState, useEffect } from 'react' 
import { useParams } from "react-router-dom"
import { Chart } from 'primereact/chart'



function TeamDetails ({userTeams}){

    const baseUrl = "https://fntsypln.herokuapp.com"

    const [team, setTeam] = useState(null)

    const params = useParams()

    useEffect(() => {
        fetch(`${baseUrl}/teams/${params.id}`)
            .then(r => r.json())
            .then(data => setTeam(data)
            )
    }, [params.id])

    let totalArr = []

    function teamFunc (){
        if (team)  {
            let pointsArr = 0
            let reboundsArr = 0
            let fieldGoalArr = 0
            let fantasytPointsArr = 0
            let minutesArr = 0
            team.players.map((player) => {
                pointsArr += player.points
                reboundsArr += player.rebounds
                fieldGoalArr += player.field_goal_percentage
                fantasytPointsArr += player.fantasy_points
                minutesArr += player.minutes_played
            })
            totalArr.push(pointsArr, reboundsArr, fieldGoalArr/team.players.length, fantasytPointsArr, minutesArr)
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
                    pointBackgroundColor: "#ffffff",
                    pointBorderColor: '#ffffff',
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderColor: '#ffffff',
                    data: totalArr
                }
        ]
    };
    
    function totalPoints(){
        let totalPoints = 0
        team.players.map(function(player){
            totalPoints += player.fantasy_points
        })
        return totalPoints
    }
    

    const lightOptions = {
        legend: {
            labels: {
                fontColor: "#ffffff"
            }
        },
        scale: {
            pointLabels: {
                fontColor: "#ffffff" 
            },
            gridLines: {
                color: "#ffffff" 
            }
        }
    };


    return (
        <div className="chart">
            <h2 class="h2">Team Stats</h2>
            <Chart class="chart" type="radar" data={chartData} options={lightOptions} />
        </div> 
    )
}


export default TeamDetails