import Api from "./api";
import adaptPokemonDetails from "../../shared/adapters/adaptPokemonDetails";

const getPokemonDetails = async (pokemonName : string) => {
    const response = await Api.get(`pokemon/${pokemonName}`);
    const pokemonDetails = adaptPokemonDetails(response);
    
    return pokemonDetails;
};

export default getPokemonDetails;