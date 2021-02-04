import './App.css';
import NavBar from './NavBar.js'
import { Switch, Route } from "react-router-dom"
import React, {useEffect, useState} from "react"
import Home from "./Home.js"
import Login from "./Login.js"
import Signup from './Signup.js'
import NewsContainer from './NewsContainer.js'
import GraphContainer from './GraphContainer.js'



function App() {

  const [news, setNews] = useState([])
  const [players, setPlayers] = useState([])



  useEffect(() => {
    fetch(`https://api.sportsdata.io/v3/nba/scores/json/News?key=fb6ead25e1fd44ffbfc076696dda1bd6`)
    .then((r) => r.json())
    .then((newsArr) => setNews(newsArr))
  }, [])


  useEffect(() => {
    fetch(`http://localhost:3000/players/`)
    .then((r) => r.json())
    .then((playersArr) => setPlayers(playersArr))
  }, [])


  return (
    <div className="App">
      <NavBar /> 
      {/* <NewsContainer news={news}/>  */}
      <GraphContainer players={players} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/news">
          <NewsContainer news={news} />
        </Route>
        <Route path="*">
           <h1>404 not found</h1>
         </Route>
      </Switch>
    </div>
  );
}

export default App;
