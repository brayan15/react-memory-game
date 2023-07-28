import React, { useEffect, useState } from 'react'

import Nav from 'src/components/Nav'
import Card from 'src/components/Card'
import Footer from 'src/components/Footer'
import { dummyData } from './utils/dummy'
import { CardItem } from './types'

function App(): React.JSX.Element {
  const [cards] = useState<CardItem[]>([
    ...dummyData.entries.slice(0, 3),
    ...dummyData.entries.slice(0, 3),
  ])
  const [openCards, setOpenCards] = useState<number[]>([])
  const [goodMovements, setGoodMovements] = useState<number>(0)
  const [wrongMovements, setWrongMovements] = useState<number>(0)
  const [matchCards, setMatchCards] = useState<Record<string, boolean>>({})

  const onCardClick = (indexCard: number): void => {
    // Avoid user opening 3 cards at time
    if (openCards.length === 2) return
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, indexCard])
      return
    }

    setOpenCards([indexCard])

    return
  }

  const checkCards = (): void => {
    const [firstIndex, secondIndex] = openCards

    if (cards[firstIndex].meta.uuid === cards[secondIndex].meta.uuid) {
      setGoodMovements((prevState) => prevState + 1)
      setMatchCards((prevState) => ({
        ...prevState,
        [cards[firstIndex].meta.uuid]: true,
      }))
    } else {
      setWrongMovements((prevState) => prevState + 1)
    }

    setTimeout(() => setOpenCards([]), 500)
  }

  useEffect(() => {
    if (openCards.length === 2) void checkCards()
  }, [openCards])

  useEffect(() => {}, [matchCards])

  return (
    <div className="app">
      <Nav />
      <div className="app__main container">
        <p>Good movements: {goodMovements}</p>
        <p>Wrong movements: {wrongMovements}</p>
        <ul className="row gy-3 list-unstyled mb-0">
          {cards.map((card, index) => (
            <li key={index} className="col-6 col-md-3">
              <Card
                card={card}
                onClick={() => onCardClick(index)}
                isFlipped={openCards.includes(index)}
                isMatched={!!matchCards[card.meta.uuid]}
              />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default App
