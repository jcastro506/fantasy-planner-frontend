import React, { useState, useEffect } from 'react' 
import { useParams } from "react-router-dom"
import { Chart } from 'primereact/chart'



function TeamDetails (){

    const [team, setTeam] = useState(null)

    const params = useParams()
    console.log(params)

    useEffect(() => {
        fetch(`http://localhost:3000/teams/${params.id}`)
            .then(r => r.json())
            .then(data => setTeam(data))
    }, [params.id])


    console.log(team)
    // const eachPlayer = team.players.map(function(player){
    //     return (player.name)
    // })


    // function totalPoints(){
    //     let totalPoints = 0
    //     team.players.map(function(player){
    //         totalPoints += player.fantasy_points
    //     })
        // return totalPoints
    // }


    const chartData = {
        labels: ['Fantasy Points', 'Minutes Played', 'Field Goal Percentage', 'Rebounds', 'Assists', 'League Points'],
        datasets: [
            {
                label: `Team One`, 
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [75, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 80]
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
        // <div className="project-item">
        //     <h1>Hey</h1>
        //     {/* {eachPlayer} */}
        // </div>
        <div className="card">
        <Chart type="radar" data={chartData} options={lightOptions} />
        </div>
    )
}


export default TeamDetails