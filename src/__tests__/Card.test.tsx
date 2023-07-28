import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Card from 'src/components/Card'
import { dummyData } from 'src/utils/dummy'

describe('Card Component', () => {
  test('renders a simple Card', () => {
    render(
      <Card onClick={() => {}} card={dummyData.entries[0]} isFlipped={false} isMatched={false} />,
    )

    const imageAltText = screen.getByAltText(/Bear/i)
    expect(imageAltText).toBeTruthy()
  })

  test('Click should be call', () => {
    const spy = jest.fn()

    render(<Card onClick={spy} card={dummyData.entries[0]} isFlipped={false} isMatched={false} />)

    const element = screen.getByTestId(/bear/i)

    fireEvent.click(element)

    expect(spy).toHaveBeenCalled()
  })

  test('Click should not be call', () => {
    const spy = jest.fn()

    render(<Card onClick={spy} card={dummyData.entries[0]} isFlipped={true} isMatched={true} />)

    const element = screen.getByTestId(/bear/i)

    fireEvent.click(element)

    expect(spy).not.toHaveBeenCalled()
  })
})
