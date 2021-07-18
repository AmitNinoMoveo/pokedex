import { store } from "../state/store";


export function generatePokemonFetchUrl(): string{

    const pageNumber = store.getState().allPokemonFeatureReducers.allPokemonPageNumber;
    
    const baseUrl = 'pokemon?';
    const PageIncrementAmount = 20;
    let outputUrl: string;
    let fetchPokemonAmountLimit: number;
    let fetchPokemonOffset: number;
    
    if (pageNumber <= 1 ) {
        fetchPokemonAmountLimit = 1 + PageIncrementAmount        
        outputUrl = `${baseUrl}limit=${fetchPokemonAmountLimit}`;
    }else{
        fetchPokemonAmountLimit = 1 + pageNumber*PageIncrementAmount;
        fetchPokemonOffset = fetchPokemonAmountLimit - PageIncrementAmount;
        outputUrl = `${baseUrl}offset=${fetchPokemonOffset}&limit=${fetchPokemonAmountLimit}`;
    };

    return outputUrl;
};