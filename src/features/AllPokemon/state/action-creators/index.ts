import { Dispatch } from "react";
import { PokemonItemInterface } from "../../utils/AllPokemonFeatureInterfaces.ts";
import { ActionTypeNames, AllPokemonActionTypes } from "../actions-types";

export const allPokemonSetState = (newState: PokemonItemInterface[]) => {
    return (dispatch: Dispatch<AllPokemonActionTypes>) => {
        dispatch({
            type: ActionTypeNames.ALLPOKEMON_SET_STATE,
            payload: newState
        });
    };
};