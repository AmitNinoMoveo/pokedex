import { Dispatch } from "react";
import { getPokemonsListFromApi } from "../../../../repository";
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

export const allPokemonFetchPokemonList = async () => {
    const newState = await getPokemonsListFromApi(1);
    console.log(JSON.stringify(newState));
    allPokemonSetState(newState);
};