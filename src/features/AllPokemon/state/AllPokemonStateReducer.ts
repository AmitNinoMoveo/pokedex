import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces.ts";
import { ALLPOKEMON_SET_STATE } from "./actionTypes";


const initAllPokemon: PokemonItemInterface[] = [];

const allPokemonReducer = (state = initAllPokemon, action) =>{
    switch(action.type){
        case ALLPOKEMON_SET_STATE:
            const newState = action.payload
            return newState
        default:
            return state

    }
}

export default allPokemonReducer;