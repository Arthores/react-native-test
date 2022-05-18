const fetchPokemon = async (poke) => {
  const fetchApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  const res = await fetchApi.json();
  return res;
};

export default fetchPokemon; 