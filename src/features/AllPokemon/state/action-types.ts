import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces";

export enum ActionTypeNames {
  ALLPOKEMON_SET_POKEMON = "ALLPOKEMON_SET_POKEMON",
  ALLPOKEMON_SET_PAGENUMBER = "ALLPOKEMON_SET_PAGENUMBER",
  ALLPOKEMON_PAGENUMBER_INC = "ALLPOKEMON_PAGENUMBER_INC",
  ALLPOKEMON_PAGENUMBER_DEC = "ALLPOKEMON_PAGENUMBER_DEC",
}

export type AllPokemonSetPokemon = {
  type: ActionTypeNames.ALLPOKEMON_SET_POKEMON;
  pokemon: PokemonItemInterface[];
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
  | AllPokemonSetPokemon
  | AllPokemonSetPageNumber
  | AllPokemonPageNumberInc
  | AllPokemonPageNumberDec;
// Visual End Of AllPokemonActionTypes Line!!
