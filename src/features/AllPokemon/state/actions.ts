import { fetchPokemonBySearch } from "../../../components/SearchComponent/repository/repository";
import { searchReset } from "../../../components/SearchComponent/state/actions";
import { AppThunk } from "../../../state/store";
import { getPokemonsListRepo } from "../repository/repository";
import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces";
import { ActionTypeNames, AllPokemonSetPokemon } from "./action-types";

export const allPokemonSetStateAction = (newState: PokemonItemInterface[]): AllPokemonSetPokemon => {
    return {
        type: ActionTypeNames.ALLPOKEMON_SET_POKEMON,
        pokemon: [...newState]
    }
}

export const allPokemonFetchListAction= (): AppThunk => async (dispatch) => {
    const data = await getPokemonsListRepo();
    dispatch({
        type: ActionTypeNames.ALLPOKEMON_SET_POKEMON,
        pokemon: [...data]
    });
};

export const allPokemonSearchAction = (): AppThunk => async (dispatch) => {
    const data = await fetchPokemonBySearch();
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