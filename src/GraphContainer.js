import React, {useState, useEffect} from 'react' 
import Player from './Player.js'
import CreateTeam from './CreateTeam.js'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Form from 'react-bootstrap/Form'



function GraphContainer ({players, handleNewTeam, search, setSearch, newUserTeams, userFavorites}) {


  //  const eachPlayer = players.map(function(player){
  //       return <Player key={player.id} player={player} /> 
  //  })
       
   
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text"/>;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text"/>;

   function handleFavorite(e){
      e.preventDefault()

      console.log(e.target)
   }

  

   return (
         <div class="playersTable">
           <div class="searchBar">
              <Form>
                <Form.Group controlId="searchBar">
                  <Form.Control type="search" placeholder="Search" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
                </Form.Group>
            </Form>
            </div>
            <CreateTeam handleNewTeam={handleNewTeam} newUserTeams={newUserTeams} />
                {/* <CreateTeam handleNewTeam={handleNewTeam} newUserTeams={newUserTeams} />  */}
                {/* <div> */}
        <div className="datatable-style-demo">
          <DataTable value={players} className="p-datatable" paginator
            paginatorTemplate="CurrentPageReport PrevPageLink PageLinks NextPageLink RowsPerPageDropdown"
            rows={15} 
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
    )
                
}


export default GraphContainer