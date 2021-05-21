import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Forgot password?" link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Forgot password?/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders "Don\'t have an account? Sign Up" link', () => {
  render(<App />);
  const linkElement2 = screen.getByText("Don't have an account? Sign Up");
  expect(linkElement2).toBeInTheDocument();
});