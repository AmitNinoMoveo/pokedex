import { singlePokemon } from "../utils/interfaces"

export enum SinglePokemonActionTypeNames {
    SINGLEPOKEMON_SETSTATE = 'SINGLEPOKEMON_SETSTATE',
};

type SinglePokemonSetState = {
    type: SinglePokemonActionTypeNames.SINGLEPOKEMON_SETSTATE;
    pokemon: singlePokemon
};

export type SinglePokemonActionTypes = 
    | SinglePokemonSetState;
