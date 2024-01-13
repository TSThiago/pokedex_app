import Api from "./api";
import { convertPokeApiDetailsToPokemon } from "../../shared/adapters/adaptPokemonList/adaptPokemonList";
import { PokemonPage } from "../../types/pokemon.interface";

const getPokemons = async () : Promise<PokemonPage[] | undefined> => {
    try {
        const response = await Api.get(`pokemon?offset=0&limit=5`);
        const pokemonList = convertPokeApiDetailsToPokemon(response.data.results);
        return pokemonList;
    } catch (error) {
        console.log("ERROR " + error)
    }
};

export default getPokemons;