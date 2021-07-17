import { PokemonItemInterface } from "../../utils/AllPokemonFeatureInterfaces.ts";

export enum ActionTypeNames {
    ALLPOKEMON_SET_STATE = 'ALLPOKEMON_SET_STATE',
    ALLPOKEMON_FETCH_DATA = 'ALLPOKEMON_FETCH_DATA',

}

export type AllPokemonSetStateActionType = {
    type: ActionTypeNames.ALLPOKEMON_SET_STATE;
    payload: PokemonItemInterface[];
};

export type AllPokemonFetchDataActionType = {
    type: ActionTypeNames.ALLPOKEMON_FETCH_DATA;
    payload: PokemonItemInterface[];
};

export type AllPokemonActionTypes = 
        AllPokemonSetStateActionType |
        AllPokemonFetchDataActionType