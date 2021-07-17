import React from 'react';
import { useAppSelector } from '../../../../state/reduxHooks';
import { RootState } from '../../../../state/store';
import PokemonItemComponent from '../PokemonItem/PokemonItemComponent'

const PokemonListComponent = () => {

    const pokemonList = useAppSelector((state: RootState)=>state.allPokemonFeatureReducers.allPokemonState);
    
    return (
        <div>
            <p>Pokemon List Works!</p>
            {
                pokemonList.map((pokemon)=>{
                return <PokemonItemComponent id={pokemon.id} name={pokemon.name} />
            })
            }
        </div>
    )
};

export default PokemonListComponent;