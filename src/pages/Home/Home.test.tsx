import { render, screen } from '@testing-library/react'
import HomePage from './index'

test('renders home page', () => {
  render(<HomePage />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
