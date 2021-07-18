import { store } from "../state/store";

export function generatePokemonFetchUrl(): string {
  const pageNumber = store.getState().allPokemonState.pageNumber;

  const baseUrl = "pokemon?";
  const PageIncrementAmount = 20;

  let outputUrl: string;
  let fetchPokemonAmountLimit: number;
  let fetchPokemonOffset: number;

  if (pageNumber <= 1) {
    fetchPokemonAmountLimit =  PageIncrementAmount;
    outputUrl = `${baseUrl}limit=${fetchPokemonAmountLimit}`;
  } else {
    fetchPokemonAmountLimit = 1 + pageNumber * PageIncrementAmount;
    fetchPokemonOffset = fetchPokemonAmountLimit - PageIncrementAmount;
    outputUrl = `${baseUrl}offset=${fetchPokemonOffset}&limit=${fetchPokemonAmountLimit}`;
  }

  return outputUrl;
}

export const generatePokemonIdString = (id: number): string => {
  const numOfZerosToAdd: number = 3 -  Math.abs(id).toString().length;
  if(numOfZerosToAdd <= 0){
    return `#${id}`;
  };
//   const idString = `#${(`000${id}`.slice(-numOfZerosToAdd))}`;
  const idString = "#" + "0".repeat(numOfZerosToAdd) + id;
  return idString;
};
