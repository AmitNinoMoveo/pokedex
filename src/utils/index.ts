export function generatePokemonFetchUrl(pageNumber: number): string{
    let url = 'pokemon?';
    let fetchPokemonAmountLimit: number;
    let fetchPokemonOffset: number;
    
    if (pageNumber <= 1 ) {
        fetchPokemonAmountLimit = 21        
        url = `${url}limit=${fetchPokemonAmountLimit}`;
    }else{
        fetchPokemonAmountLimit = 1 + pageNumber*20;
        fetchPokemonOffset = fetchPokemonAmountLimit - 20;
        url = `${url}offset=${fetchPokemonOffset}&limit=${fetchPokemonAmountLimit}`;
    };

    return url;
};