const fetchKanto = async () => {
  const fetchApi = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const res = await fetchApi.json();
  return res;
};

export default fetchKanto;