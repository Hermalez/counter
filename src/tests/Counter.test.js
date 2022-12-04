// import necessary react testing library helpers here
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})

test('renders counter message', () => {
  expect(screen.getByRole('heading')).toHaveTextContent('Counter')
});

test('should render initial count with value of 0', () => {
  expect(screen.getByTestId("count")).toHaveTextContent('0')
});

test('clicking + increments the count', () => {
  fireEvent.click(screen.getByText('+'))
  expect(screen.getByTestId("count")).toHaveTextContent('1')
});

test('clicking - decrements the count', () => {
  fireEvent.click(screen.getByText('-'))
  expect(screen.getByTestId("count")).toHaveTextContent('-1')
});
