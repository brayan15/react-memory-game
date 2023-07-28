import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from 'src/App'

test('renders Welcome to Memory Game text', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Welcome to Memory Game/i)
  expect(linkElement).toBeInTheDocument()
})
