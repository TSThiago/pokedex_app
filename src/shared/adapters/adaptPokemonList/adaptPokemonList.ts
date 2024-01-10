import { Pokemon } from "../../../types/pokemon.interface"

export const convertPokeApiDetailsToPokemon = (pokeDetails: any) => {
    const pokemon: Pokemon = {
        number: pokeDetails.id,
        name: pokeDetails.name,
        types: pokeDetails.types.map((typeSlot: any) => typeSlot.type.name),
        type: pokeDetails.types[0].name,
        photo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeDetails.id}.png`
    }
    return pokemon
}