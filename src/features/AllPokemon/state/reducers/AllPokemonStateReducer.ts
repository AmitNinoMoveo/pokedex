import { PokemonItemInterface } from "../../utils/AllPokemonFeatureInterfaces.ts";
import { ActionTypeNames, AllPokemonActionTypes } from "../actions-types";

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
    case ActionTypeNames.ALLPOKEMON_SET_POKEMONS:
        return {
        ...state,
        pokemonList: action.pokemons,
      };
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
      if (state.pageNumber === 1) {
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
