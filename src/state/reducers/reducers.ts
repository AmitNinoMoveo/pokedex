import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../../components/SearchComponent/state/SearchReducer";
import allPokemonReducer from '../../features/AllPokemon/state/AllPokemonStateReducer'
import singlePokemonReducer from '../../features/SinglePokemon/state/singlePokemonReducer';


const appReducers = combineReducers({
    allPokemonState: allPokemonReducer,
    singlePokemonState: singlePokemonReducer,
    searchState: searchReducer
});

export default appReducers;