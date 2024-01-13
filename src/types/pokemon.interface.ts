export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonPage {
    url: string;
}

export interface PokemonDetails {
    number : number;
    name : string;
    types : [];
    photo : string;
};