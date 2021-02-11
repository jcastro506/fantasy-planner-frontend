import './App.css';
import NavBar from './NavBar.js'
import { Switch, Route, Redirect } from "react-router-dom"
import React, {useEffect, useState} from "react"
import Home from "./Home.js"
import Login from "./Login.js"
import Signup from './Signup.js'
import NewsContainer from './NewsContainer.js'
import GraphContainer from './GraphContainer.js'
import Player from './Player.js'
import Profile from './Profile.js'
import TeamDetails from './TeamDetails.js'
import Logout from './Logout.js'
import TeamComparer from './TeamComparer.js'



function App() {

  const [news, setNews] = useState([])
  const [players, setPlayers] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState([])
  const [userTeams, setUserTeams] = useState([])
  const [search, setSearch] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [favorites, setFavorites] = useState([])

console.log(userTeams)

  useEffect(() => {
    fetch(`https://api.sportsdata.io/v3/nba/scores/json/News?key=fb6ead25e1fd44ffbfc076696dda1bd6`)
    .then((r) => r.json())
    .then((newsArr) => setNews(newsArr))
  }, [])


  useEffect(() => {
    fetch(`http://localhost:3000/players/`)
    .then((r) => r.json())
    .then(playersArr => {
      setPlayers(playersArr)
    })
  }, [])


  useEffect(() => {
    // fake auth
    fetch("http://localhost:3000/users/1")
      .then((r) => r.json())
      .then((user) => {
        let allTeams = user.teams
        console.log(allTeams)
      setUserTeams(allTeams)
      console.log(user.teams)
      setUser(user)
      setIsLoaded(true)
      })
    }, [])


  function userFavorites(playerName){
    const newFavorite = [...favorites, playerName]
  } 

  
  function setLogin (){
    setLoggedIn(!loggedIn)
    console.log(loggedIn)
  }


  function handleNewTeam(teamObj){
    console.log("New Obj", teamObj)
    const newTeam = [...userTeams, teamObj]
    setUserTeams(newTeam)
    console.log(newTeam)
  }


  function deleteTeam(id){
    console.log("Delete Picture", id)
    const newArray = userTeams.filter(team => team.id !== id)
    setUserTeams(newArray)
  }


  function editedTeams(teamObj){
    userTeams.map(function(team){
      if (teamObj.id === team.id){
        const newPlayers = [...team.players, teamObj.players]
      } 
      else {
        return null 
      }
    })
  }


  function changeLogin (){
    setLoggedIn(!loggedIn)
  }


  const displayedPlayers = players.filter((player) => 
    player.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="App">
      <NavBar changeLogin={changeLogin} loggedIn={loggedIn}/> 
      {/* <NewsContainer news={news}/>  */}
      <Switch>
        <Route exact path="/">
           <Home loggedIn={loggedIn} setLoggedIn={setLogin}/> 
        </Route>
        <Route exact path="/login">
          <Login loggedIn={loggedIn} setLoggedIn={setLogin}/>
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/news">
          <NewsContainer loggedIn={loggedIn} news={news} />
        </Route>
        <Route exact path="/players">
          <GraphContainer userFavorites={userFavorites} loggedIn={loggedIn} players={displayedPlayers} search={search} setSearch={setSearch} handleNewTeam={handleNewTeam}/>
        </Route>
        <Route exact path="/profile">
          <Profile  players={players} loggedIn={loggedIn} isLoaded={isLoaded} userTeams={userTeams} deleteTeam={deleteTeam} />
        </Route>
        <Route exact path="/teams/:id">
          <TeamDetails userTeams={userTeams} />
        </Route>
        <Route exact path="/teamComparer">
          <TeamComparer userTeams={userTeams} />
        </Route>
        <Route exact path="/logout">
          <Logout changeLogin={changeLogin} /> 
        </Route>
        <Route path="*">
           <h1>404 not found</h1>
         </Route>
      </Switch>
    </div>
  );
}

export default App;
