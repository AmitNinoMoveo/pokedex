import { ActionTypeNames, AllPokemonActionTypes } from "../actions-types";


const initPageNumber = 1;

const AllPokemonPageNumberReducer = (state = initPageNumber, action: AllPokemonActionTypes) => {
    switch(action.type){
        case ActionTypeNames.ALLPOKEMON_PAGENUMBER_SETSTATE:
            return action.payload;
        case ActionTypeNames.ALLPOKEMON_PAGENUMBER_INC:
            if(state === 20){
                return state;
            }else{
                const newState = state + 1    
                return newState;
            };
        case ActionTypeNames.ALLPOKEMON_PAGENUMBER_DEC:
            if(state === 1 ){
                return state;
            }else{
                const newState = state - 1
                return state;
            };
    };
};

export default AllPokemonPageNumberReducer;