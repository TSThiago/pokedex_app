// import axios from "axios";
// import { PokemonPage } from "../../types/pokemon.interface";

// const getPokemonDetails = async (pokemonsPages: PokemonPage[]) => {
//     const pokemons = await Promise.all(
//         pokemonsPages.map(async (pokemonsPage) => {
//             const res = (await axios.get(pokemonsPage.url)).data;
//             return res;
//         })
//     );
//     return pokemons;
// };

// export default getPokemonDetails;