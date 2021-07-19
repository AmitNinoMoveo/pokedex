import api from "../../../api";
import { PokemonItemInterface } from "../../../features/AllPokemon/utils/AllPokemonFeatureInterfaces";
import { store } from "../../../state/store";

export const fetchPokemonBySearch = async (): Promise<
  PokemonItemInterface[]
> => {
  const query = store.getState().searchState;
  const { data } = await api.get("pokemon?limit=999");
  const filteredPokemonsList = data.results
    .map((pokemon: { name: string; url: string }) => {
      let name = pokemon.name;
      let url = pokemon.url;
      let id = +url.split("pokemon/")[1].split("/")[0];
      let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      name = name.charAt(0).toUpperCase() + name.substring(1);
      return { id, name, imageUrl } as PokemonItemInterface;
    })
    .filter(
      (item: PokemonItemInterface) =>
        item.name.includes(query) || item.id.toString().includes(query)
    )
    .slice(0, 20);
  return filteredPokemonsList;
};
