import React, { useEffect } from 'react';
import { useAppSelector } from '../../../../state/reduxHooks';
import { RootState } from '../../../../state/store';
import { allPokemonFetchList } from '../../state/action-creators';
import PokemonItemComponent from '../PokemonItem/PokemonItemComponent'

const PokemonListComponent = () => {

    const pokemonList = useAppSelector((state: RootState) => state.allPokemonFeatureReducers.allPokemonState);

    useEffect(() => {
        allPokemonFetchList();
    },[]);

    return (
        <div>
            {
                pokemonList.length ?
                    pokemonList.map((pokemon) => {
                        return <PokemonItemComponent key={pokemon.id} id={pokemon.id} name={pokemon.name} />
                    })
                    :
                    <p>No Pokemon!</p>
            }
        </div>
    );
};

export default PokemonListComponent;