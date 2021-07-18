import { getPokemonsListFromApi } from "../../repository";
import { PokemonItemInterface } from "../../utils/AllPokemonFeatureInterfaces.ts";
import { ActionTypeNames, AllPokemonActionTypes } from "../actions-types";


const initAllPokemon: PokemonItemInterface[] = [];

const allPokemonReducer = (state = initAllPokemon, action: AllPokemonActionTypes ) =>{
    switch(action.type){
        case ActionTypeNames.ALLPOKEMON_SET_STATE:
            const newState = action.payload
            console.log('All Pokemon Set State Action!');
            return newState;
        default:
            return state;
    };
};

export default allPokemonReducer;