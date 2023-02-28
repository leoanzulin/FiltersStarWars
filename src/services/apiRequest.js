const requestFromAPI = async () => {
  const abortController = new AbortController();

  const response = await fetch('https://swapi.dev/api/planets', {
    signal: abortController.signal,
  });

  const { results } = await response.json();

  const filteredResult = results.map((planet) => {
    delete planet.residents;
    return planet;
  });

  return filteredResult;
};

export default requestFromAPI;
