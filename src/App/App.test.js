import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';
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
    render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    );
    const header = screen.getByText("Settlr");
    const logo = screen.getByAltText("logo");
    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText("Atlanta")).toBeInTheDocument())
    expect(screen.getByText("Bali")).toBeInTheDocument()
    expect(screen.getByText("Caracas")).toBeInTheDocument()
    screen.debug()
  });

})
