import React from 'react'
import { PokemonItemInterface } from '../utils/AllPokemonFeatureInterfaces.ts';

type Props = {
    pokemon: PokemonItemInterface
}

const PokemonItemComponent: React.FC<Props> = ({pokemon}: Props) => {

    const { id, name, imageUrl } = pokemon;

    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <img src={imageUrl} alt={`${name}`} />
        </div>
    )
}

export default PokemonItemComponent;