import { fetchPokemonBySearch } from "../../../components/SearchComponent/repository/repository";
import { searchReset } from "../../../components/SearchComponent/state/actions";
import { AppThunk } from "../../../state/store";
import { getPokemonsListRepo } from "../repository/repository";
import { ActionTypeNames, AllPokemonActionTypes } from "./action-types";

export const allPokemonResetStateAction = (): AllPokemonActionTypes => {
    return {
        type: ActionTypeNames.ALLPOKEMON_RESET_STATE
    }
}

export const allPokemonFetchListAction= (): AppThunk => async (dispatch) => {
    dispatch({
        type: ActionTypeNames.ALLPOKEMON_RESET_STATE
    })
    const data = await getPokemonsListRepo();
    dispatch({
        type: ActionTypeNames.ALLPOKEMON_SET_POKEMON,
        pokemon: [...data]
    });
};

export const allPokemonSearchAction = (): AppThunk => async (dispatch) => {
    dispatch({
        type: ActionTypeNames.ALLPOKEMON_RESET_STATE
    })
    const data = await fetchPokemonBySearch();
    if (!data.length) {
        dispatch(allPokemonFetchListAction());
        dispatch(searchReset());
        return
    }
    dispatch({
        type: ActionTypeNames.ALLPOKEMON_SET_POKEMON,
        pokemon: [...data]
    });
    dispatch(searchReset());
};

export const allPokemonPageInc = (): AppThunk => async (dispatch) =>  {
    dispatch({
        type: ActionTypeNames.ALLPOKEMON_PAGENUMBER_INC
    });
    dispatch(allPokemonFetchListAction());
};
export const allPokemonPageDec = (): AppThunk => async (dispatch) =>  {
    dispatch({
        type: ActionTypeNames.ALLPOKEMON_PAGENUMBER_DEC
    });
    dispatch(allPokemonFetchListAction());
};