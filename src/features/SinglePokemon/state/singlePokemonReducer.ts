import { singlePokemon } from "../utils/interfaces"
import { SinglePokemonActionTypeNames, SinglePokemonActionTypes } from "./action-types"

const initialState: singlePokemon = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
    types: [''],
    stats: [{name: '', value: 0}],
}

const singlePokemonReducer = (state = initialState, action: SinglePokemonActionTypes) => {
    switch(action.type){
        case (SinglePokemonActionTypeNames.SINGLEPOKEMON_SETSTATE):
            return {...action.pokemon}
        case (SinglePokemonActionTypeNames.SINGLEPOKEMON_RESETINIT):
            return {...initialState}
        default:
            return state
    };
};

export default singlePokemonReducer;