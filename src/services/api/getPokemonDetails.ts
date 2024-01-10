import { convertPokeApiDetailsToPokemon } from "../../shared/adapters/adaptPokemonList/adaptPokemonList"

export const getPokemonDetails = (pokemon: any) => {
    return fetch(pokemon.url).then(response => response.json())
    .then((pokemon => convertPokeApiDetailsToPokemon))
}