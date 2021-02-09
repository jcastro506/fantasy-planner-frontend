import React, {useState, useEffect} from 'react' 
import Player from './Player.js'
import CreateTeam from './CreateTeam.js'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';



function GraphContainer ({players, handleNewTeam, search, setSearch}) {


   const eachPlayer = players.map(function(player){
        return <Player key={player.id} player={player} /> 
   })
       
   
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;


   return (
         <div>
            <input
                type="text"
                placeholder={"Search For A Player"}
                value={search}
                onChange={(e) => {
                setSearch(e.target.value)
                }}
                />
                <CreateTeam handleNewTeam={handleNewTeam} /> 
                <div>
        <div className="card">
          <DataTable value={players} className="p-datatable" paginator
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={15} rowsPerPageOptions={[10, 20, 50]}
            paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
            <Column className="table-props" style={{width: "125px"}} field="id" header="Id" sortable></Column>
            <Column className="table-props" style={{width: "125px"}} field="name" header="Name" sortable></Column>
            <Column className="table-props" style={{width: "125px"}} field="position" header="Pos" sortable></Column>
            <Column className="table-props" style={{width: "125px"}} field="nba_team" header="NBA T" sortable></Column>
            <Column className="table-props" style={{width: "125px"}} field="minutes_played" header="Mins" sortable></Column>
            <Column className="table-props" style={{width: "125px"}} field="field_goal_percentage" header="Fg%" sortable></Column>
            <Column className="table-props" style={{width: "125px"}} field="rebounds" header="Reb" sortable></Column>
            <Column className="table-props" style={{width: "125px"}} field="assists" header="Ast" sortable></Column>
            <Column className="table-props" style={{width: "125px"}} field="points" header="Pts" sortable></Column>
            <Column className="table-props" style={{width: "125px"}} field="fantasy_points" header="FntP" sortable></Column>
          </DataTable>
        </div>
      </div>
                {/* {eachPlayer} */}
        </div>
            )
                
}


export default GraphContainer