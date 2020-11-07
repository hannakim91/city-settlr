import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {

  it('renders the App', () => {
    render(<App />);
    const header = screen.getByText("Settlr");
    expect(header).toBeInTheDocument();
  });

})
