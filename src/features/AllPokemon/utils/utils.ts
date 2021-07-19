import { store } from "../../../state/store";


export function generatePokemonFetchUrl(): string {
  const pageNumber = store.getState().allPokemonState.pageNumber;

  const baseUrl = "pokemon?";
  const fetchPokemonAmountLimit = 20;

  let outputUrl: string;
  let fetchPokemonOffset: number;

  if (pageNumber <= 1) {
    outputUrl = `${baseUrl}limit=${fetchPokemonAmountLimit}`;
  } else {
    fetchPokemonOffset = pageNumber * fetchPokemonAmountLimit;
    outputUrl = `${baseUrl}offset=${fetchPokemonOffset}&limit=${fetchPokemonAmountLimit}`;
  }

  return outputUrl;
};
