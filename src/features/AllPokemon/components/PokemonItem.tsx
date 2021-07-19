import React from 'react';
import { useHistory } from 'react-router-dom';
import { generatePokemonIdString } from '../../../utils/utils';
import '../styles/PokemonItem.css';
import { PokemonItemInterface } from '../utils/AllPokemonFeatureInterfaces';

type Props = {
    pokemon: PokemonItemInterface
}

const PokemonItemComponent: React.FC<Props> = ({pokemon}: Props) => {

    const { id, name, imageUrl } = pokemon;

    const history = useHistory();
    const onPokemonClick = () => {
        history.push('/pokemon/'+pokemon.id);
    };

    return (
        <div className="container-pokemon-item" id="hoverable-container" onClick={onPokemonClick }>
            <p id="id" >{generatePokemonIdString(id)}</p>
            <img id="pokemon" src={imageUrl} alt={`${name}`} />
            <p id="name" >{name}</p>
        </div>
    )
}

export default PokemonItemComponent;