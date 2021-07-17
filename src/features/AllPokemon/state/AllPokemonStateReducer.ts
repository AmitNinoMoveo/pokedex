import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces.ts";
import { ActionTypeNames, ActionTypes } from "./actions";


const initAllPokemon: PokemonItemInterface[] = [];

const allPokemonReducer = (state = initAllPokemon, action: ActionTypes ) =>{
    switch(action.type){
        case ActionTypeNames.ALLPOKEMON_SET_STATE:
            const newState = action.payload
            return newState
        default:
            return state

    }
}

export default allPokemonReducer;