import React, { useEffect } from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/components/HeaderComponent';
import SearchComponent from './components/SearchComponent/components/SearchComponent';
import PokemonListComponent from './features/AllPokemon/components/PokemonList/PokemonListComponent';
import { allPokemonFetchPokemonList } from './features/AllPokemon/state/action-creators';
import { useAppSelector } from './state/reduxHooks';
import { RootState } from './state/store';

function App() {

  const pokemonList = useAppSelector((state: RootState) => state.allPokemonFeatureReducers.allPokemonState);

  useEffect(()=>{
    allPokemonFetchPokemonList();
  })

  return (
    <div className="App">
      <HeaderComponent />
      <SearchComponent />
      {
        !pokemonList.length ?
        <PokemonListComponent />
        : 
        <p>No pokemon</p>
      }
    </div>
  );
}

export default App;
