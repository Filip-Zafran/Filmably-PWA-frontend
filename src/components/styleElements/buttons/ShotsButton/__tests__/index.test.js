/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import { ShotsButton } from '../index';
const mockFn = jest.fn(() => true);

test('renders ShotsButton with like is true, and checks if the check icon is not null', () => {
  const { debug } = render(
    <ShotsButton
      like={true}
      active={true}
      clickHandler={mockFn}
      otherClickHandler={mockFn}
    />
  );
  expect(screen.getByTestId('check')).not.toBeNull();
  debug();
});

test('renders ShotsButton with like is false, and checks if the X icon exists', () => {
  const { debug } = render(
    <ShotsButton
      like={false}
      active={true}
      clickHandler={mockFn}
      otherClickHandler={mockFn}
    />
  );
  expect(screen.getByTestId('x-icon')).not.toBeNull();
  debug();
});
