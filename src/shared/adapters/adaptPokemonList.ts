import { Pokemon, PokemonPage } from "../../types/pokemon.interface"

export const convertPokeApiListToPokemon = (pokemons: Pokemon[]): PokemonPage[] => {
    const adaptedPokemons : PokemonPage[] = pokemons.map((pokemon : Pokemon) => {
        return {
           url: pokemon.url
        }
    })
    return adaptedPokemons;
}