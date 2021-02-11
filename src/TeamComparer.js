import React, {useState} from 'react' 
import { Chart } from 'primereact/chart'


function TeamComparer ({userTeams}){

    const [teamOne, setTeamOne] = useState("")
    const [teamTwo, setTeamTwo] = useState('')
    const [clicked, setClicked] = useState(false)


    const data1 = [3642, 4238, 4300, 4432, 4016]
    const data2 = [4805, 4800, 3460, 3656, 4968]
    const data3 = [3500, 4013, 3156, 3920, 2900]
    const data4 = [3100, 4221, 4102, 3922, 4129]
    const data5 = [3865, 3255, 4011, 3875, 3991]

    let random = data1.sort(() => .5 - Math.random()).slice(0,5)
    let randomTwo = data1.sort(() => .5 - Math.random()).slice(0,5)



    function handleChange(e){
        e.preventDefault()

        console.log(teamOne)

    }

    function getData (){
        if (teamOne === "Josh's Allstars"){
            return data1
        }
        else if (teamOne === "Dream Team"){
            return data2 
        }
        else if (teamOne === "Kevin's Team"){
            return data3
        }
        else if (teamOne === "Annie's Allstars"){
            return data4
        }
        else{
            return data5
        }
    }

    function handleClick (){
        setClicked(!clicked)
    }


    console.log(userTeams)
    console.log(teamOne)
    console.log(teamTwo)


    const chartData = {
        labels: ['Minutes Played', 'Field Goals Made', 'Rebounds', 'Assists', 'League Points'],
        datasets: [
            {
                label: `${teamOne}`, 
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: random
            },
            {
                label: `${teamTwo}`,
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: randomTwo
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
                onChange={(e) => setTeamOne(e.target.value)}>
                    {userTeams.map(function(team){
                        return <option key={team.id} value={team.name}>{team.name}</option>
                    })} 
                </select>
                <select 
                name= "players"
                value={teamTwo}
                onChange={(e) => setTeamTwo(e.target.value)}>
                    {userTeams.map(function(team){
                        return <option key={team.id} value={team.name}>{team.name}</option>
                    })} 
                </select>
            </label>
            <br></br>
            <button onClick={handleClick}>{clicked ? "Clear" : "Compare"}</button>
         </form>
       <br></br>
       {clicked ? 
       <div className="card">
        <Chart type="radar" data={chartData} options={lightOptions} />
        </div> 
        : null }
    </div>
    )
}


export default TeamComparer