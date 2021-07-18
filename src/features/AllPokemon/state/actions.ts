import { AppThunk } from "../../../state/store";
import { getPokemonsListRepo } from "../repository/repository";
import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces";
import { ActionTypeNames, AllPokemonSetPokemons } from "./action-types";

export const allPokemonSetState = (newState: PokemonItemInterface[]): AllPokemonSetPokemons => {
    return {
        type: ActionTypeNames.ALLPOKEMON_SET_POKEMONS,
        pokemons: [...newState]
    }
}

export const allPokemonFetchListAction= (): AppThunk => async (dispatch) => {
    const data = await getPokemonsListRepo();
    dispatch({
        type: ActionTypeNames.ALLPOKEMON_SET_POKEMONS,
        pokemons: [...data]
    });
};