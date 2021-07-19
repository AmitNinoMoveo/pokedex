import { combineReducers } from "@reduxjs/toolkit";
import allPokemonReducer from '../../features/AllPokemon/state/AllPokemonStateReducer'
import singlePokemonReducer from '../../features/SinglePokemon/state/singlePokemonReducer';


const appReducers = combineReducers({
    allPokemonState: allPokemonReducer,
    singlePokemonState: singlePokemonReducer
});

export default appReducers;