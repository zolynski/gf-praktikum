import React from 'react';
import { render, screen } from '@testing-library/react';
import {Listing} from './App';

test('renders learn react link', () => {
  render(<Listing />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
