import { CardItem } from 'src/types'

function shuffle(array: number[]): number[]

function shuffle(array: CardItem[]): CardItem[]

function shuffle(array: unknown[]): unknown[] {
  const shuffleArray = array.slice()

  for (let i = shuffleArray.length - 1; i > 0; i--) {
    const currentIndex = i
    const randomIndex = Math.floor(Math.random() * (i + 1))
    const orderOne = shuffleArray[currentIndex]
    const orderTwo = shuffleArray[randomIndex]
    shuffleArray[currentIndex] = orderTwo
    shuffleArray[randomIndex] = orderOne
  }

  return shuffleArray
}

export { shuffle }
