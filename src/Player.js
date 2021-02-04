import React from 'react' 
import { DataGrid } from '@material-ui/data-grid'


function Player ({player}){

    const {
        name,
        assists,
        fantasy_points,
        field_goal_percentage,
        id,
        minutes_played,
        nba_team,
        player_id,
        points,
        position,
        rebounds
    } = player

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'FullName', headerName: 'FullName', width: 130 },
        { field: 'Assists', headerName: 'Assists', type: 'number', width: 90 },
        { field: 'FantasyPoints', headerName: 'FantasyPoints', type: 'number', width: 90 },
        { field: 'FieldGoalPercentage', headerName: 'Field Goal Percentage', type: 'number', width: 90 },
        { field: 'MinutesPlayed', headerName: 'Minutes Played', type: 'number', width: 90 },
        { field: 'NBATeam', headerName: 'NBA Team', width: 130 },
        { field: 'Points', headerName: 'Points', type: 'number', width: 90 },
        { field: 'Position', headerName: 'Position', width: 130 },
        { field: 'Rebounds', headerName: 'Rebounds', type: 'number', width: 90 }
    ]


     const rows = [
        { id: 1, FullName: {name}, Assists: {assists}, FantasyPoints: {fantasy_points}, FieldGoalPercentage: {field_goal_percentage}, MinutesPlayed: {minutes_played}, NBATeam: {nba_team}, Points: {points}, Position: {position}, Rebounds: {rebounds}}
        // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },            
        // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
     ];

    return (
    //     <div style={{ height: 400, width: '100%' }}>
    //     <DataGrid rows={rows} columns={columns} />
    //   </div>
    null
    )   


}

export default Player