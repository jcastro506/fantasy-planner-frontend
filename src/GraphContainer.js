import React from 'react' 
import Player from './Player.js'

function GraphContainer ({players}) {
   const eachPlayer = players.map(function(player){
        return <Player key={player.id} player={player} /> 
    })


    return (
        <div>
            {eachPlayer}
        </div>
    )
}


export default GraphContainer