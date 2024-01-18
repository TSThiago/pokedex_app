import { PokemonDetails } from "../../types/pokemon.interface"

const adaptPokemonDetails = (pokeDetails) => {
    const pokemonDetails: PokemonDetails = {
        number: pokeDetails.id,
        name: pokeDetails.name,
        types: pokeDetails.types.map((typeSlot) => {
            return typeSlot.type.name
        }),
        photo: pokeDetails.sprites.other.home.front_default
    }
    console.log(pokemonDetails)
    return pokemonDetails;
}

export default adaptPokemonDetails;