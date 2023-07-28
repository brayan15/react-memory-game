import { useState } from 'react'
import { CardItem } from 'src/types'

type UseGetCardsT = {
  error: boolean
  cards: CardItem[]
  isLoading: boolean
  getCards: () => Promise<void>
}

type ResponseT = {
  entries: CardItem[]
}

const useGetCards = (): UseGetCardsT => {
  const [error, setError] = useState<boolean>(false)
  const [cards, setCards] = useState<CardItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getCards = async () => {
    try {
      setError(false)
      setIsLoading(true)

      const response = await fetch(
        'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20',
      )

      const data = (await response.json()) as ResponseT

      setCards(data.entries)
    } catch {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    error,
    cards,
    getCards,
    isLoading,
  }
}

export default useGetCards
