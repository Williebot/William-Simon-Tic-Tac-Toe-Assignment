import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// Test that checks if the App component renders without crashing
it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText("William's Tic Tac Toe")).toBeInTheDocument();
});

// Test that checks if the game starts correctly
it('starts the game with X', () => {
  render(<App />);
  const nextPlayerText = screen.getByText(/Next player: X/i);
  expect(nextPlayerText).toBeInTheDocument();
});

// Test that simulates a player making a move
it('allows a square to be clicked', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  // This assumes first button is a square in the tic-tac-toe game
  fireEvent.click(buttons[0]); // Simulates clicking the first square
  // This square should now contain 'X'
  expect(buttons[0]).toHaveTextContent('X');
});
