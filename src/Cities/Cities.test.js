import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cities from './Cities';

describe('Cities', () => {

  it('renders a card UI section', () => {
    const cities = ["Atlanta", "Bali", "Caracas"]
    render(
      <MemoryRouter>
        <Cities 
          cities={cities}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("Cities")).toBeInTheDocument();
    expect(screen.getByText("Atlanta")).toBeInTheDocument();
    expect(screen.getByText("Bali")).toBeInTheDocument();
    expect(screen.getByText("Caracas")).toBeInTheDocument();
  });

})
