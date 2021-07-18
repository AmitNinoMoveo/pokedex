import { combineReducers } from "@reduxjs/toolkit";
import allPokemonReducer from '../../features/AllPokemon/state/reducers/AllPokemonStateReducer'


const appReducers = combineReducers({
    allPokemonState: allPokemonReducer
});

export default appReducers;