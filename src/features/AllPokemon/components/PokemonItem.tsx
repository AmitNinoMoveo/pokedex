import React from 'react';
import '../styles/PokemonItem.css';
import { PokemonItemInterface } from '../utils/AllPokemonFeatureInterfaces.ts';

type Props = {
    pokemon: PokemonItemInterface
}

const PokemonItemComponent: React.FC<Props> = ({pokemon}: Props) => {

    const { id, name, imageUrl } = pokemon;

    return (
        <div className="container-pokemon-item" >
            <p id="id" >{id}</p>
            <img id="pokemon" src={imageUrl} alt={`${name}`} />
            <p id="name" >{name}</p>
        </div>
    )
}

export default PokemonItemComponent;