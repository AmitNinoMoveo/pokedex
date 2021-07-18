import api from "../../../api";
import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces";
import { generatePokemonFetchUrl } from "../../../utils/utils";

export async function getPokemonsListRepo(){
    const { data } = await api.get(generatePokemonFetchUrl());
    const pokemonsList = data.results.map((pokemon:any)=>{
        let name = pokemon.name;
        let id = pokemon.url;
        
        name = name.charAt(0).toUpperCase() + name.substring(1);
        id = +id.split('pokemon/')[1].split('/')[0];
        
        let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return { id, name, imageUrl } as PokemonItemInterface;
    });
    return pokemonsList;
};