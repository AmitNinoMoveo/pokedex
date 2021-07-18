import React from 'react'
import { PokemonItemInterface } from '../utils/AllPokemonFeatureInterfaces.ts';

interface Props {
    pokemon: PokemonItemInterface
}

const PokemonItemComponent: React.FC<Props> = ({pokemon}: Props) => {

    const { id, name } = pokemon;

    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </div>
    )
}

export default PokemonItemComponent;