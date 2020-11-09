export const getAllCities = async () => {
  const promise = await fetch('https://api.teleport.org/api/urban_areas/')
  return await promise.json()
}

export const getComparisonData = async (cities) => {
  return Promise.all(cities.map(city => fetch(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().replace(/, | /g,"-")}/scores/`).then(response => response.json())))
    // .then(values => console.log(values))
}
//can you loop through fetching map through fetches?

//api setup:
//list of all cities: _links.curies[i].name (all city names available)
//https://api.teleport.org/api/urban_areas/
//individual city score: _links.categories[i].name || score_out_of_10
//`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`
// individual city images: _links.photos[0].attribution.source
//`https://api.teleport.org/api/urban_areas/slug:${cityName}/images/`

