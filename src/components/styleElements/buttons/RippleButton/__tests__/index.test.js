/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from '@testing-library/react';
import RippleButton from '../index';
const mockFn = jest.fn(() => true);

test('renders RippleButton and checks if rippleSpan is null', () => {
  const { debug } = render(<RippleButton />);
  expect(screen.getByTestId('rippleContainer')).not.toBeNull();
  expect(screen.queryByTestId('rippleSpan')).toBeNull();
  debug();
});

test('fires mousdeDown event and checks if rippleSpan is null', () => {
  const { debug } = render(<RippleButton />);
  fireEvent.mouseDown(screen.getByTestId('rippleContainer'));
  expect(screen.queryByTestId('rippleSpan')).not.toBeNull();
  debug();
});
