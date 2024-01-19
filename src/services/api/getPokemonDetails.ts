import Api from "./api";

const getPokemonDetails = async (pokemonNumber : number) => {
    const response = await Api.get(`pokemon/${pokemonNumber}`);
    return response.data;
};

export default getPokemonDetails;