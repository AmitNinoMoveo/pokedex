import api from "../../../api";
import { PokemonItemInterface } from "../../../features/AllPokemon/utils/AllPokemonFeatureInterfaces";
import { store } from "../../../state/store";

interface rawResponse {
  data: {
    name: string,
    order: number,
  }
}

export const fetchPokemonBySearch = async (): Promise<
  PokemonItemInterface[]
> => {
  try {
    const query = store.getState().searchState;
    const { data } : rawResponse = await api.get("pokemon/" + query);
    const name = data.name.charAt(0).toUpperCase() + data.name.substring(1);
    const id = data.order;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const pokemonItem = [{ id, name, imageUrl }] as PokemonItemInterface[];
    return pokemonItem;
  } catch (error) {
    console.log(error);
    return [];
  };
};
