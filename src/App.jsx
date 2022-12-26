import { useEffect, useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Gameboard from './components/Gameboard'
import Card from './components/Card'
import data from './cardsData'

export default function App() {
    const [score, setScore] = useState(0)
    const [highScore, setHighScore] = useState(0)
    const [cards, setCards] = useState(data)

    const handleClick = (e) => {
      const card = cards.find(item => item.name === e.target.textContent)
      if (card.clicked === false) {
        setScore(score + 1)
        const newCard = {
          ...card,
          clicked: true
        };
      setCards(cards.map(item => (item.name === newCard.name) ? item = newCard : item))
      } else {
        console.log(data)
        setCards(data)
        if (score > highScore) {
          setHighScore(score)
        }
        setScore(0)
      }
    }

    const mapper = cards.map((item, index) => {
    return (
        <Card
        key={index}
        click={handleClick}
        cardName={item.name}
        >
        </Card>)
  })

    useEffect(() => {
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

