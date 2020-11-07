import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import { getAllCities } from '../apiCalls.js'
import '@testing-library/jest-dom/extend-expect';
import App from './App';
jest.mock('../apiCalls.js');

describe('App', () => {
  beforeEach(() => {
    getAllCities.mockResolvedValue({
      _links: {
        ['ua:item']: [
          {name:"Atlanta"}, 
          {name: "Bali"},
          {name: "Caracas"}
        ]
      }
    })
  })
  it('renders the App', async () => {
    render(<App />);
    const header = screen.getByText("Settlr");
    expect(header).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText("Atlanta")).toBeInTheDocument())
    expect(screen.getByText("Bali")).toBeInTheDocument()
    expect(screen.getByText("Caracas")).toBeInTheDocument()

  });

})
