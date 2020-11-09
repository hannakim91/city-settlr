import { render, screen } from '@testing-library/react';
import CityCard from './CityCard';

describe('CityCard', () => {

  it('renders a card', () => {
    render(
      <CityCard 
        name="New York City"
      />
    );
    const name = screen.getByText("New York City");
    const addToCompareIcon = screen.getByAltText("add to compare list")
    
    expect(name).toBeInTheDocument();
    screen.debug()
    expect(addToCompareIcon).toBeInTheDocument()
  });

})
