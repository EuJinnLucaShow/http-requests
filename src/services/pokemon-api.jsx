async function fetchPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error(`Нет покемона с именем ${name}`));
}

const api = {
  fetchPokemon,
};

export default api;