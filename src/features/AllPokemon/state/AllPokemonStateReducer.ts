import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces";
import { ActionTypeNames, AllPokemonActionTypes } from "./action-types";

export type allPokemonReducerType = {
    pokemonList: PokemonItemInterface[];
    pageNumber: number;
  }

const initialState: allPokemonReducerType = {
  pokemonList: [],
  pageNumber: 0,
};

const allPokemonReducer = (
  state = initialState,
  action: AllPokemonActionTypes
): allPokemonReducerType => {
  switch (action.type) {
    case ActionTypeNames.ALLPOKEMON_SET_POKEMON:
        return {
        ...state,
        pokemonList: action.pokemon,
      };
    case ActionTypeNames.ALLPOKEMON_RESET_STATE:
      return {
        ...state,
        pokemonList: {...initialState.pokemonList}
      }
    case ActionTypeNames.ALLPOKEMON_SET_PAGENUMBER:
        return {
            ...state,
            pageNumber: action.pageNumber
        };
    case ActionTypeNames.ALLPOKEMON_PAGENUMBER_INC:
      if (state.pageNumber === 20) {
        return state;
      } else {
        return {
            ...state, 
            pageNumber: state.pageNumber + 1
        };
      };
    case ActionTypeNames.ALLPOKEMON_PAGENUMBER_DEC:
      if (state.pageNumber === 0) {
        return state;
      } else {
        return{
            ...state,
            pageNumber: state.pageNumber - 1
        };
      };
    default:
      return state;
  }
};

export default allPokemonReducer;
