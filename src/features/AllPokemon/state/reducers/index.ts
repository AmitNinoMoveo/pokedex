import { combineReducers } from 'redux';
import allPokemonReducer from './AllPokemonStateReducer';
import AllPokemonPageNumberReducer from './AllPokemonPageNumber';


const allPokemonFeatureReducers = combineReducers({
    allPokemonState: allPokemonReducer,
    allPokemonPageNumber: AllPokemonPageNumberReducer
});

export default allPokemonFeatureReducers