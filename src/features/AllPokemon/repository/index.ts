import api from "../../../api";
import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces.ts";
import { generatePokemonFetchUrl } from "../../../utils";

export async function getPokemonsListFromApi(pageNumber: number){
    const { data } = await api.get(generatePokemonFetchUrl(pageNumber));
    const pokemonsList = data.results.map((pokemon:any)=>{
        let name = pokemon.name;
        let id = pokemon.url;

        name = name.charAt(0).toUpperCase() + name.substring(1);
        id = +id.split('pokemon/')[1].split('/')[0];

        return { id, name } as PokemonItemInterface;
    });
    return pokemonsList;
};