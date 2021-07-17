import React from 'react'
import PokemonItemComponent from '../PokemonItem/PokemonItemComponent'

const PokemonListComponent = () => {
    return (
        <div>
            <p>Pokemon List Works!</p>
            {
                [1,2,3].map(()=><PokemonItemComponent/>)
            }
        </div>
    )
};

export default PokemonListComponent;