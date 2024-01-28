import Api from "./api";
import { convertPokeApiListToPokemon } from "../../shared/adapters/adaptPokemonList";
import { PokemonPage } from "../../types/pokemon.interface";

const getPokemons = async (offset : number, limit: number) : Promise<PokemonPage[] | undefined> => {
    try {
        const response = await Api.get(`pokemon?offset=${offset}&limit=${limit}`);
        const pokemonList = convertPokeApiListToPokemon(response.data.results);
        return pokemonList;
    } catch (error) {
        console.log("ERROR " + error)
    }
};

export default getPokemons;