import { PokemonItemInterface } from "../../utils/AllPokemonFeatureInterfaces.ts";

export enum ActionTypeNames {
    ALLPOKEMON_SET_STATE = 'ALLPOKEMON_SET_STATE',
    ALLPOKEMON_FETCH_DATA = 'ALLPOKEMON_FETCH_DATA',
    ALLPOKEMON_PAGENUMBER_SETSTATE = 'ALLPOKEMON_PAGENUMBER_SET_STATE',
    ALLPOKEMON_PAGENUMBER_INC = 'ALLPOKEMON_PAGENUMBER_INC',
    ALLPOKEMON_PAGENUMBER_DEC = 'ALLPOKEMON_PAGENUMBER_DEC',
}

export type AllPokemonSetStateActionType = {
    type: ActionTypeNames.ALLPOKEMON_SET_STATE;
    payload: PokemonItemInterface[];
};

export type AllPokemonFetchDataActionType = {
    type: ActionTypeNames.ALLPOKEMON_FETCH_DATA;
    payload: PokemonItemInterface[];
};

export type AllPokemonPageNumberSetStateActionType = {
    type: ActionTypeNames.ALLPOKEMON_PAGENUMBER_SETSTATE;
    payload: number
}

export type AllPokemonPageNumberIncActionType = {
    type: ActionTypeNames.ALLPOKEMON_PAGENUMBER_INC;
};
export type AllPokemonPageNumberDecActionType = {
    type: ActionTypeNames.ALLPOKEMON_PAGENUMBER_DEC;
};

export type AllPokemonActionTypes = 
        AllPokemonSetStateActionType |
        AllPokemonFetchDataActionType |
        AllPokemonPageNumberSetStateActionType |
        AllPokemonPageNumberIncActionType |
        AllPokemonPageNumberDecActionType
;
// Visual End Of AllPokemonActionTypes Line!!