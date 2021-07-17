import { combineReducers } from "@reduxjs/toolkit";
import allPokemonFeatureReducers from '../../features/AllPokemon/state/reducers/index';


const appReducers = combineReducers({
    allPokemonFeatureReducers
});

export default appReducers;