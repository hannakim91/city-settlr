import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cities from './Cities';

describe('Cities', () => {

  it('renders a card UI section', () => {
    const cities = ["Atlanta", "Bali", "Caracas"]
    const compareList = ["Atlanta"]
    render(
      <MemoryRouter>
        <Cities 
          cities={cities}
          compareList={compareList}
        />
      </MemoryRouter>
    );

    const button = screen.getByText('Compare!');
    const sectionHeader = screen.getByText("Cities");

    expect(sectionHeader).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(screen.getByText("Atlanta")).toBeInTheDocument();
    expect(screen.getByText("Bali")).toBeInTheDocument();
    expect(screen.getByText("Caracas")).toBeInTheDocument();
  });

})
