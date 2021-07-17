import { PokemonItemInterface } from "../../utils/AllPokemonFeatureInterfaces.ts";
import { ActionTypeNames, AllPokemonActionTypes } from "../actions-types";


const initAllPokemon: PokemonItemInterface[] = [
    {
        id: 1,
        name: 'bulbasur'
    },
    {
        id: 2,
        name: 'squirtle'
    },
    {
        id: 3,
        name: 'bulbasur'
    },
    {
        id: 4,
        name: 'pokemon'
    },
];

const allPokemonReducer = (state = initAllPokemon, action: AllPokemonActionTypes ) =>{
    switch(action.type){
        case ActionTypeNames.ALLPOKEMON_SET_STATE:
            const newState = action.payload
            return newState
        default:
            return state

    }
}

export default allPokemonReducer;