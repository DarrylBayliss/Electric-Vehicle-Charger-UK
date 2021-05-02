import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './pages/App'

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  // FIXME: This test doesn't pass.
  render(<App />)
  screen.debug()
  const linkElement = screen.debug
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument()
})
