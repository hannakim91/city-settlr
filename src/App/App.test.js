import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import { getAllCities } from '../apiCalls.js'
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {

  it('renders the App', () => {
    render(<App />);
    const header = screen.getByText("Settlr");
    expect(header).toBeInTheDocument();
  });

})
