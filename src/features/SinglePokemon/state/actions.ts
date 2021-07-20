import { AppThunk } from "../../../state/store";
import { getPokemonRepo } from "../repository/repository";
import { SinglePokemonActionTypeNames, SinglePokemonActionTypes } from "./action-types";

export const SinglePokemonFetchAction = (pokemonId: number): AppThunk => async (dispatch) => {
    const data = await getPokemonRepo(pokemonId);
    dispatch({
        type: SinglePokemonActionTypeNames.SINGLEPOKEMON_SETSTATE,
        pokemon: {...data}
    });
};

export const SinglePokemonResetState = (): SinglePokemonActionTypes => {
    return {
        type: SinglePokemonActionTypeNames.SINGLEPOKEMON_RESETINIT
    };
};