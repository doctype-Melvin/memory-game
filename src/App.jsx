import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Gameboard from './components/Gameboard'

export default function App() {
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [cards, setCards] = useState(
      [
        {
          index: 1,
          name: 'One',
          clicked: false
        },
        {
          index: 2,
          name: 'Two',
          clicked: false
        },
        {
          index: 3,
          name: 'Three',
          clicked: false
        },
      ]
    )

  return (
    <div className='gameContainer'>
      <Header 
      score={score}
      setScore={setScore}
      highScore={highScore}
      setHighScore={setHighScore}
      />
      <Gameboard 
      cards={cards}
      />
    </div>
  )
}

