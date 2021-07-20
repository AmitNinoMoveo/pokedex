import { singlePokemon } from "../utils/interfaces"

export enum SinglePokemonActionTypeNames {
    SINGLEPOKEMON_SETSTATE = 'SINGLEPOKEMON_SETSTATE',
    SINGLEPOKEMON_RESETINIT = 'SINGLEPOKEMON_RESETINIT',
};

type SinglePokemonSetState = {
    type: SinglePokemonActionTypeNames.SINGLEPOKEMON_SETSTATE;
    pokemon: singlePokemon
};

type SinglePokemonResetState = {
    type: SinglePokemonActionTypeNames.SINGLEPOKEMON_RESETINIT
}

export type SinglePokemonActionTypes = 
    | SinglePokemonSetState
    | SinglePokemonResetState;

