import React, {useState, useEffect} from 'react'
import HighScoreCard from './HighScoreCard'

function HighScores() {
  const [playerData, setPlayerData] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/players")
    .then(resp => resp.json())
    .then(data => setPlayerData(data))
  }, [])

  console.log(playerData)
  const playerDataList = playerData.map(player => {
    return <HighScoreCard key={player.id} player={player}/>
  })

  return (
    <div className="background fade-in">
      <h1>Highscores</h1>    
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        
        {playerDataList}
      </div>
  )
}

export default HighScores