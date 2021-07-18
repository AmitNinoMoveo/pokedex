import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { getPokemonsListFromApi } from "../../repository";
import { RootState } from "../../../../state/store";
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

export const allPokemonFetchList = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch: Dispatch<AllPokemonActionTypes>)  => {
        const data = await getPokemonsListFromApi()
        dispatch({
            type: ActionTypeNames.ALLPOKEMON_SET_STATE,
            payload: data
        });
    };
};