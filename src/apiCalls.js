export const getAllCities = async () => {
  const promise = await fetch('https://api.teleport.org/api/urban_areas/')
  return await promise.json()
}

//can you loop through fetching map through fetches?

//api setup:
//list of all cities: _links.curies[i].name (all city names available)
https://api.teleport.org/api/urban_areas/
//individual city score: _links.categories[i].name || score_out_of_10
`https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`
// individual city images: _links.photos[0].attribution.source
`https://api.teleport.org/api/urban_areas/slug:${cityName}/images/`

