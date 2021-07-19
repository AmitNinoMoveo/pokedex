export const generatePokemonIdString = (id: number): string => {
    const numOfZerosToAdd: number = 3 - Math.abs(id).toString().length;
    if (numOfZerosToAdd <= 0) {
      return `#${id}`;
    }
    return "#" + "0".repeat(numOfZerosToAdd) + id;
  };