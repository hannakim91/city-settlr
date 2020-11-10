# Settlr - Mod 3 Final Solo Project

## Created By
- [Hanna Kim](https://github.com/hannakim91)

## Abstract
Settlr is a multi-page React app built for remote/tech workers looking to find the next best city to move to. A user starts at a homepage that renders city cards they can interact with the cards in 2 ways:
- Click city name links to route to each city's details page
- Choose 2 or 3 cities to "compare" the most relevant quality of life factors to a remote worker.

## Setup & Installation
To view and use the application, clone down [this repository](git@github.com:hannakim91/city-settlr.git) and install npm. Run npm and open [localhost:3000](localhost:3000) on your browser of choice

Note: Currently the main codebase lives on the **develop** branch on GitHub
```
git clone git@github.com:hannakim91/city-settlr.git
npm install
npm start
```
To view the test suite:
```
npm test
```

## App in Action

## Skills
- Functional JavaScript Programming
- Test Driven Development
- Git workflow using project board, issues focused on user stories & linked to specific branches, automated PR template, creating a separate `develop` branch on GitHub to push/pull local changes 
- Wireframing using Figma

## Technologies Used
- React
- Hooks
- React Router
- Jest & React testing libraries
- NPM
- Git/GitHub
- Async JS to Fetch RESTful API
- PropTypes

## Wins & Challenges
### Transitioning from Class Components to Functional Components
Going from class-based components to functional components using hooks was a tricky transition, especially for the city comparison feature. Building this feature relied on logic to both add a set number of cities to a list of cities to compare and also in order to to toggle icons from B&W (default) to colored (on click). I now have a better understanding of how to more effectively use the `useState` hook.
### Working with pre-defined API Data
Managing how the API data I chose was organized in 3 separate endpoints and developing component architecture based on this. The list of all the cities' names was only on one endpoint while each individual city's details and images were on two endpoints. I was able to use `Promise.all` to fetch data for multiple cities I wanted to compare and tried to write a similar request for the details and images
### Enhancing Git Workflow
- Focusing on using terminal commands to create/re-name/delete files and directories in the repo.
- Organizing project issues/branches to reflect AGILE workflow used in most professional environments

## Additional Links
- [Project Board](https://github.com/hannakim91/city-settlr/projects/1)
- [Wireframe](https://www.figma.com/file/a9ncSEEXTjgllnlgJFrYe5/Wireframe?node-id=0%3A1)


## Credits
- Icons created by [Freepik](http://www.freepik.com/) and [Surang](https://www.flaticon.com/free-icon/balance_2942830)
- [Teleport API](https://developers.teleport.org/api/getting_started/#search_name)
- [Spec](https://frontend.turing.io/projects/module-3/binary-challenge.html)