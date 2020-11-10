export const getAllCities = async () => {
  const promise = await fetch('https://api.teleport.org/api/urban_areas/')
  return await promise.json()
}

export const getComparisonData = async (cities) => {
  return Promise.all(cities.map(city => fetch(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().replace(/, | /g,"-")}/scores/`).then(response => response.json())))
}

export const getSingleCity = async (city) => {
  const promise = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase().replace(/, | /g,"-")}/scores/`)
  return await promise.json()
}

