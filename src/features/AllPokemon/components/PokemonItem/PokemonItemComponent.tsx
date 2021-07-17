import React from 'react'
import { PokemonItemInterface } from '../../utils/AllPokemonFeatureInterfaces.ts';

const PokemonItemComponent = (props: PokemonItemInterface) => {

    const { id, name } = props;

    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </div>
    )
}

export default PokemonItemComponent;