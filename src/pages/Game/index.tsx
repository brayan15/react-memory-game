import React, { useEffect, useState, FunctionComponent } from 'react'

import { CardItem } from 'src/types'
import Card from 'src/components/Card'
import { dummyData } from 'src/utils/dummy'
import { shuffle } from 'src/utils/shuffle'
//import { useLocation } from 'react-router-dom'

const Game: FunctionComponent = () => {
  //const location = useLocation()
  const [cards, setCards] = useState<CardItem[]>([])
  const [openCards, setOpenCards] = useState<number[]>([])
  const [hits, setHits] = useState<number>(0)
  const [mistakes, setMistakes] = useState<number>(0)
  const [matchCards, setMatchCards] = useState<Record<string, boolean>>({})

  const shuffleArray = (elements: CardItem[]) => {
    return shuffle(elements)
  }

  const onCardClick = (indexCard: number): void => {
    // Avoid user opening 3 cards at time
    if (openCards.length === 2) return

    // OpenCards has 1 card and is called to show the second card
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, indexCard])
      return
    }

    // OpenCards does not have any card
    setOpenCards([indexCard])

    return
  }

  const checkCards = (): void => {
    // Get cards from openCards
    const [firstIndex, secondIndex] = openCards

    // Check if cards are same
    if (cards[firstIndex].meta.uuid === cards[secondIndex].meta.uuid) {
      setHits((prevState) => prevState + 1)

      // Save card on matchCards and show them
      setMatchCards((prevState) => ({
        ...prevState,
        [cards[firstIndex].meta.uuid]: true,
      }))
    } else {
      setMistakes((prevState) => prevState + 1)
    }

    // Hide cards again
    setTimeout(() => setOpenCards([]), 500)
  }

  const onResetGame = () => {
    const data = shuffleArray([
      ...dummyData.entries.slice(0, 10),
      ...dummyData.entries.slice(0, 10),
    ])

    setHits(0)
    setMistakes(0)
    setOpenCards([])
    setMatchCards({})
    setCards(data)
  }

  useEffect(() => {
    if (openCards.length === 2) void checkCards()
  }, [openCards])

  useEffect(() => {
    if (Object.keys(matchCards).length === cards.length / 2) {
      // show tooltip game is done
    }
  }, [matchCards])

  useEffect(() => {
    const data = shuffleArray([
      ...dummyData.entries.slice(0, 10),
      ...dummyData.entries.slice(0, 10),
    ])
    setCards(data)
  }, [])

  return (
    <div className="game container">
      <p className="text-success">Hits: {hits}</p>
      <p className="text-danger">Mistakes: {mistakes}</p>
      <ul className="row gy-3 list-unstyled mb-0 mt-4">
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
      <div className="d-flex mt-4 justify-content-center">
        <button onClick={onResetGame} className="btn btn-primary">
          Restart game
        </button>
      </div>
    </div>
  )
}

export default Game
