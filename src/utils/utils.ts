export const generatePokemonIdString = (id: number): string => {
  const numOfZerosToAdd: number = 3 - Math.abs(id).toString().length;
  if (numOfZerosToAdd <= 0) {
    return `#${id}`;
  }
  return "#" + "0".repeat(numOfZerosToAdd) + id;
};

export const toTitleCaseSingle = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
};
export const toTitleCase = (str: string): string => {
  return str.replace( /\w\S*/g , (txt:string)=>toTitleCaseSingle(txt));
};

export const getPokemonTypeColor = (type: string) => {
  const pokemonTypeColor = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
  if (type in pokemonTypeColor) {
    // @ts-ignore
    return pokemonTypeColor[type];
  }
};
