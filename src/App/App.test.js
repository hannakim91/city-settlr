import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";
import { MemoryRouter } from 'react-router-dom';
import { getAllCities, getComparisonData } from '../apiCalls.js'
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

    getComparisonData.mockResolvedValue(
      [
        {
          categories: [
            {
              "color": "#f3c32c",
              "name": "Housing",
              "score_out_of_10": 4.9755
            },
            {
              "color": "#f3d630",
              "name": "Cost of Living",
              "score_out_of_10": 5.241
            },
            {
              "color": "#f4eb33",
              "name": "Startups",
              "score_out_of_10": 8.835
            },
            {
              "color": "#d2ed31",
              "name": "Venture Capital",
              "score_out_of_10": 7.2570000000000014
            },
            {
              "color": "#7adc29",
              "name": "Travel Connectivity",
              "score_out_of_10": 5.2915
            },
            {
              "color": "#36cc24",
              "name": "Commute",
              "score_out_of_10": 3.8977500000000003
            },
            {
              "color": "#19ad51",
              "name": "Business Freedom",
              "score_out_of_10": 8.671
            },
            {
              "color": "#0d6999",
              "name": "Safety",
              "score_out_of_10": 2.6725
            },
            {
              "color": "#051fa5",
              "name": "Healthcare",
              "score_out_of_10": 8.533999999999999
            },
            {
              "color": "#150e78",
              "name": "Education",
              "score_out_of_10": 6.456999999999999
            },
            {
              "color": "#3d14a4",
              "name": "Environmental Quality",
              "score_out_of_10": 5.817749999999999
            },
            {
              "color": "#5c14a1",
              "name": "Economy",
              "score_out_of_10": 6.5145
            },
            {
              "color": "#88149f",
              "name": "Taxation",
              "score_out_of_10": 4.204
            },
            {
              "color": "#b9117d",
              "name": "Internet Access",
              "score_out_of_10": 6.4805
            },
            {
              "color": "#d10d54",
              "name": "Leisure & Culture",
              "score_out_of_10": 7.765499999999999
            },
            {
              "color": "#e70c26",
              "name": "Tolerance",
              "score_out_of_10": 4.062
            },
            {
              "color": "#f1351b",
              "name": "Outdoors",
              "score_out_of_10": 5.0095
            }
          ]
        },
        {
          categories: [
            {
              "color": "#f3c32c",
              "name": "Housing",
              "score_out_of_10": 5.0
            },
            {
              "color": "#f3d630",
              "name": "Cost of Living",
              "score_out_of_10": 0.0
            },
            {
              "color": "#f4eb33",
              "name": "Startups",
              "score_out_of_10": 1.6280000000000001
            },
            {
              "color": "#d2ed31",
              "name": "Venture Capital",
              "score_out_of_10": 0.0
            },
            {
              "color": "#7adc29",
              "name": "Travel Connectivity",
              "score_out_of_10": 1.9299999999999997
            },
            {
              "color": "#36cc24",
              "name": "Commute",
              "score_out_of_10": 5.193500000000001
            },
            {
              "color": "#19ad51",
              "name": "Business Freedom",
              "score_out_of_10": 3.912333333333333
            },
            {
              "color": "#0d6999",
              "name": "Safety",
              "score_out_of_10": 8.7475
            },
            {
              "color": "#051fa5",
              "name": "Healthcare",
              "score_out_of_10": 2.6823333333333332
            },
            {
              "color": "#150e78",
              "name": "Education",
              "score_out_of_10": 0.5275
            },
            {
              "color": "#3d14a4",
              "name": "Environmental Quality",
              "score_out_of_10": 4.13775
            },
            {
              "color": "#5c14a1",
              "name": "Economy",
              "score_out_of_10": 4.657500000000001
            },
            {
              "color": "#88149f",
              "name": "Taxation",
              "score_out_of_10": 6.266
            },
            {
              "color": "#b9117d",
              "name": "Internet Access",
              "score_out_of_10": 3.2375000000000003
            },
            {
              "color": "#d10d54",
              "name": "Leisure & Culture",
              "score_out_of_10": 6.3335
            },
            {
              "color": "#e70c26",
              "name": "Tolerance",
              "score_out_of_10": 4.558999999999999
            },
            {
              "color": "#f1351b",
              "name": "Outdoors",
              "score_out_of_10": 7.5005
            }
          ]
        }
      ]
    )


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
  });

  it('can add a city to a list of cities to compare', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    await waitFor(() => expect(screen.getByText("Atlanta")).toBeInTheDocument())
    const addToCompareListIcon = screen.getByAltText("add Atlanta to compare list")
    expect(addToCompareListIcon.src).toEqual('http://localhost/scale-bw.png')
    userEvent.click(addToCompareListIcon)
    expect(addToCompareListIcon.src).toEqual('http://localhost/scale-color.png')
  })

  it('can add route to a page that compares two cities', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    await waitFor(() => expect(screen.getByText("Atlanta")).toBeInTheDocument())
    const addAtlantaIcon = screen.getByAltText("add Atlanta to compare list")
    const addBaliIcon = screen.getByAltText("add Bali to compare list")
    const compareButton = screen.getByText("Compare!")
 
    userEvent.click(addAtlantaIcon)
    userEvent.click(addBaliIcon)
    userEvent.click(compareButton)
    await waitFor(() => expect(screen.getByText("Compare Cities")).toBeInTheDocument())

    const atlantaStats = {
      name: screen.getByText("Atlanta"),
      travel: screen.getByText("Travel Connectivity: 5.3"),
      internet: screen.getByText("Internet Access: 6.5"),
      economy: screen.getByText("Economy: 6.5"),
      culture: screen.getByText("Leisure & Culture: 7.8"),
      egalitarianism: screen.getByText("Egalitarianism: 7.8")
    }

    const baliStats = {
      name: screen.getByText("Bali"),
      travel: screen.getByText("Travel Connectivity: 1.9"),
      internet: screen.getByText("Internet Access: 3.2"),
      economy: screen.getByText("Economy: 4.7"),
      culture: screen.getByText("Leisure & Culture: 6.3"),
      egalitarianism: screen.getByText("Egalitarianism: 6.3")
    }

    expect(atlantaStats.name).toBeInTheDocument()
    expect(atlantaStats.travel).toBeInTheDocument()
    expect(atlantaStats.internet).toBeInTheDocument()
    expect(atlantaStats.economy).toBeInTheDocument()
    expect(atlantaStats.culture).toBeInTheDocument()
    expect(atlantaStats.egalitarianism).toBeInTheDocument()

    expect(baliStats.name).toBeInTheDocument()
    expect(baliStats.travel).toBeInTheDocument()
    expect(baliStats.internet).toBeInTheDocument()
    expect(baliStats.economy).toBeInTheDocument()
    expect(baliStats.culture).toBeInTheDocument()
    expect(baliStats.egalitarianism).toBeInTheDocument()
  })

  it('should show an error message if user tries to compare with only one city', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    await waitFor(() => expect(screen.getByText("Atlanta")).toBeInTheDocument())
    const addAtlantaIcon = screen.getByAltText("add Atlanta to compare list")
    const compareButton = screen.getByText("Compare!")
 
    userEvent.click(addAtlantaIcon)
    userEvent.click(compareButton)
    await waitFor(() => expect(screen.getByText("Settlr")).toBeInTheDocument())
 
    const error = "Please select 2 or more cities to compare"
    expect(screen.getByText(error)).toBeInTheDocument()
  })

})
