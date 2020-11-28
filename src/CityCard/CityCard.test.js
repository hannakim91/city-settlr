import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CityCard from './CityCard';

describe('CityCard', () => {

  it('renders a card', () => {
    render(
      <MemoryRouter>
        <CityCard 
        name="New York City"
        />
      </MemoryRouter>
      
    );
    const name = screen.getByText("New York City");
    const addToCompareIcon = screen.getByAltText("add New York City to compare list")
    
    expect(name).toBeInTheDocument();
    expect(addToCompareIcon).toBeInTheDocument()
  });

})
