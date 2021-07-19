import { AppThunk } from "../../../state/store";
import { getPokemonRepo } from "../repository/repository";
import { SinglePokemonActionTypeNames } from "./action-types";

export const SinglePokemonFetchAction= (pokemonId: number): AppThunk => async (dispatch) => {
    const data = await getPokemonRepo(pokemonId);
    dispatch({
        type: SinglePokemonActionTypeNames.SINGLEPOKEMON_SETSTATE,
        pokemon: {...data}
    });
};