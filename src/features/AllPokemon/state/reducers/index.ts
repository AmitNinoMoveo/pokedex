import { combineReducers } from 'redux';
import allPokemonReducer from './AllPokemonStateReducer';


const allPokemonFeatureReducers = combineReducers({
    allPokemonState: allPokemonReducer
});

export default allPokemonFeatureReducers