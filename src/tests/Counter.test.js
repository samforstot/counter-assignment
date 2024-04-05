// import necessary react testing library helpers here
import {render, fireEvent, screen, getByText, getByTestId} from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const message = screen.getByText(/Counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const plus = screen.getByText('+');
  const count = screen.getByTestId('count');

  // Increment 1
  fireEvent.click(plus);
  expect(count).toHaveTextContent('1');

  // Increment 2
  fireEvent.click(plus);
  expect(count).toHaveTextContent('2');

  // Increment 3
  fireEvent.click(plus);
  expect(count).toHaveTextContent('3');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const minus = screen.getByText('-');
  const count = screen.getByTestId('count');

  // Decrement 1
  fireEvent.click(minus);
  expect(count).toHaveTextContent('-1');

  // Decrement 2
  fireEvent.click(minus);
  expect(count).toHaveTextContent('-2');

  // Decrement 3
  fireEvent.click(minus);
  expect(count).toHaveTextContent('-3');
});




