import React, { FunctionComponent } from 'react'

import { CardItem } from 'src/types'
import img from 'src/assets/question-mark.png'

type CardT = {
  card: CardItem
  isFlipped: boolean
  isMatched: boolean
  onClick: () => void
}

const Card: FunctionComponent<CardT> = ({ card, onClick, isFlipped, isMatched }) => {
  const handleClick = (): void => {
    if (isFlipped || isMatched) return
    void onClick()
  }

  return (
    <div
      className={`card-item ${isFlipped ? 'card-item--flipped' : ''} ${
        isMatched ? 'card-item--matched' : ''
      }`}
    >
      <div
        onClick={handleClick}
        className="card-item__image-container card-item__image-container-front"
      >
        <img
          src={img}
          alt="question mark"
          className="card-item__image m-auto d-block border border-dark rounded p-1"
        />
      </div>
      <div className="card-item__image-container card-item__image-container-back">
        <img
          src={card.fields.image.url}
          alt={card.fields.image.title}
          className="card-item__image m-auto d-block border border-dark rounded p-1"
        />
      </div>
    </div>
  )
}

export default Card
