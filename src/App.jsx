import { useEffect, useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Gameboard from './components/Gameboard'
import Card from './components/Card'

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
// Find the clicked card
// If the clicked value is false increment score && set clicked value to true
// else reset score and set highscore and reset all clicked values to false

    const increment = (e) => {
      whichCard(e)
      return setScore(score + 1)
    }

    const whichCard = (e) => {
      const target = cards.find(item => item.name === e.target.textContent)
      console.log(target.clicked)
      return target
    }

    const mapper = cards.map(item => {
    return (
    <Card
    key={item.index}
    click={increment}
    cardName={item.name}
    which={whichCard}
    >
    </Card>)
  })

    useEffect(() => {
      console.log('render')
      setCards(() => cards.sort(() => Math.random() - 0.5))
    }, [score])

  return (
    <div className='gameContainer'>
      <Header 
      score={score}
      setScore={setScore}
      highScore={highScore}
      setHighScore={setHighScore}
      />
      <Gameboard
      mapper={mapper}
      />
    </div>
  )
}

