import { PokemonItemInterface } from "../../utils/AllPokemonFeatureInterfaces.ts";

export enum ActionTypeNames {
    ALLPOKEMON_SET_STATE = 'ALLPOKEMON_SET_STATE',
}

export type AllPokemonSetStateActionType = {
    type: ActionTypeNames.ALLPOKEMON_SET_STATE;
    payload: PokemonItemInterface[];
};

export type ActionTypes = AllPokemonSetStateActionType;