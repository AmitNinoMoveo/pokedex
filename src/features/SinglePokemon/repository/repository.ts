import api from "../../../api";
import { singlePokemon, singleStat } from "../utils/interfaces";

type rawStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};
type rawType = {
  type: {
    name: string;
  };
};
type rawStatsTypesResponse = {
  name: string;
  sprites: {
    front_default: string;
  };
  stats: rawStat[];
  types: rawType[];
};
type rawFlavorTextResponse = {
  flavor_text_entries: { flavor_text: string }[];
};

export const getPokemonRepo = async (
  pokemonId: number
): Promise<singlePokemon> => {
  const response1 = await api.get("pokemon/" + pokemonId);
  const statsTypesResponse: rawStatsTypesResponse = response1.data;
  const response2 = await api.get("pokemon-species/" + pokemonId);
  const flavorTextResponse: rawFlavorTextResponse = response2.data;
  const stats: singleStat[] = statsTypesResponse.stats.map(
    (rawStat: rawStat) => {
      let name = rawStat.stat.name;
      if (name.includes('-')) {
        name = name.replace('-', ' ') ;
      }
      const stat: singleStat = {
        name,
        value: +rawStat.base_stat,
      };
      return stat;
    }
  );
  const types: string[] = statsTypesResponse.types.map((rawType: rawType) => {
    const type = rawType.type.name;
    return type;
  });
  const pokemon: singlePokemon = {
    id: pokemonId,
    name: statsTypesResponse.name,
    description: flavorTextResponse.flavor_text_entries[0].flavor_text,
    imageUrl: statsTypesResponse.sprites.front_default,
    types,
    stats,
  };
  return pokemon;
};
