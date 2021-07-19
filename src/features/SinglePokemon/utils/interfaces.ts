export interface singleStat{
    name: string;
    value: number;
};

export interface singlePokemon {
    id: number;
    name: string;
    description: string;
    types: string[];
    stats: singleStat[];
};