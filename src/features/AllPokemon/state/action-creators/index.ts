import { Dispatch } from "react";
import { store } from "../../../../state/store";
import { getPokemonsListFromApi } from "../../repository";
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

export const allPokemonFetchList = async (): Promise<void> => {
    const data = await getPokemonsListFromApi()
    store.dispatch({
        type: ActionTypeNames.ALLPOKEMON_SET_STATE,
        payload: [...data]
    });
};