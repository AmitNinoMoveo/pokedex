export interface singleStat{
    name: string;
    value: number;
};

export interface singlePokemon {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    types: string[];
    stats: singleStat[];
};