import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces";

export enum ActionTypeNames {
  ALLPOKEMON_SET_POKEMONS = "ALLPOKEMON_SET_POKEMONS",
  ALLPOKEMON_SET_PAGENUMBER = "ALLPOKEMON_SET_PAGENUMBER",
  ALLPOKEMON_PAGENUMBER_INC = "ALLPOKEMON_PAGENUMBER_INC",
  ALLPOKEMON_PAGENUMBER_DEC = "ALLPOKEMON_PAGENUMBER_DEC",
}

export type AllPokemonSetPokemons = {
  type: ActionTypeNames.ALLPOKEMON_SET_POKEMONS;
  pokemons: PokemonItemInterface[];
};

export type AllPokemonSetPageNumber = {
  type: ActionTypeNames.ALLPOKEMON_SET_PAGENUMBER;
  pageNumber: number;
};

export type AllPokemonPageNumberInc = {
  type: ActionTypeNames.ALLPOKEMON_PAGENUMBER_INC;
};
export type AllPokemonPageNumberDec = {
  type: ActionTypeNames.ALLPOKEMON_PAGENUMBER_DEC;
};

export type AllPokemonActionTypes =
  | AllPokemonSetPokemons
  | AllPokemonSetPageNumber
  | AllPokemonPageNumberInc
  | AllPokemonPageNumberDec;
// Visual End Of AllPokemonActionTypes Line!!
