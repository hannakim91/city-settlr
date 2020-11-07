import { render, screen } from '@testing-library/react';
import Cities from './Cities';

describe('Cities', () => {

  it('renders a card UI section', () => {
    const cities = ["Atlanta", "Bali", "Caracas"]
    render(
      <Cities 
        cities={cities}
      />
    );
    expect(screen.getByText("Cities")).toBeInTheDocument();
    expect(screen.getByText("Atlanta")).toBeInTheDocument();
    expect(screen.getByText("Bali")).toBeInTheDocument();
    expect(screen.getByText("Caracas")).toBeInTheDocument();
  });

})
