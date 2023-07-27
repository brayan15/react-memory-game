import React, { FunctionComponent } from 'react'
import { CardItem } from 'src/types'

type CardT = {
  card: CardItem
}

const Card: FunctionComponent<CardT> = ({ card }) => {
  return (
    <div className="card-item h-100">
      <img
        src={card.fields.image.url}
        alt={card.fields.image.title}
        className="card-item__image m-auto d-block border border-dark rounded p-1"
      />
    </div>
  )
}

export default Card
