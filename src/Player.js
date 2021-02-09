import React, {useState} from 'react' 


function Player ({player}){

    const {
        name
    } = player


     function handleSubmit (e){

        console.log(e.target)


        const newPlayer = {
            player: e.target
        }
     }



    return (
    //     <div style={{ height: 400, width: '100%' }}>
    //     <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    //   </div>
    <div>
        <p>{name}</p>
    </div>
    )   


}

export default Player