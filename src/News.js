import React from 'react'  
import Card from 'react-bootstrap/Card'


function News ({article}) {

    const {
        NewsID,
        TimeAgo,
        Title,
        Content,
        URL,
        OriginalSourceUrl
    } = article
    

    const imageArr = [
      "https://clutchpoints.com/wp-content/uploads/2020/06/Greatest-NBA-Players-Best-NBA-Players-Ranking-NBA-Players-NBA-Goat.-Who-Is-The-Best-Player-Ever-1.jpg",
      "https://oddslifenetstorage.blob.core.windows.net/sbcamericas/2018/07/NBAApp-Playoffs18-Roku-1200x628-1068x559.jpg",
      "https://cdn.vox-cdn.com/thumbor/A96j6bHwcqiYAoE3GavXJgWaGV8=/0x0:3200x1800/1200x675/filters:focal(1248x358:1760x870)/cdn.vox-cdn.com/uploads/chorus_image/image/63069423/nba_25_best_2_getty_ringer.0.jpg",
      "https://www.wkbn.com/wp-content/uploads/sites/48/2020/11/national-basketball-association-logo.jpg?w=1280"
    ]

    let randomPic = Math.floor(Math.random()*imageArr.length)

    const getPic = () => {
      return randomPic
    }

    function HandleTab() { 
      window.open( 
        `${OriginalSourceUrl}`, "_blank"); 
  } 


  return (
      <div class="news">
         <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://www.wkbn.com/wp-content/uploads/sites/48/2020/11/national-basketball-association-logo.jpg?w=1280" />
          <Card.Body>
            <Card.Title>{Title}</Card.Title>
            <p>({TimeAgo})</p>
            <Card.Text>
              {Content}
            </Card.Text>
            </Card.Body>
            <Card.Body>
            <Card.Link onClick={HandleTab}>Original Source</Card.Link>
          </Card.Body>
          </Card>
          <hr></hr>
          <br></br>
        
    </div>
  ); 

}


export default News