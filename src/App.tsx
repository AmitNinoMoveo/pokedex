import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/components/HeaderComponent';
import SearchComponent from './components/SearchComponent/components/SearchComponent';
import PokemonListComponent from './features/AllPokemon/components/PokemonList/PokemonListComponent';
import { getPokemonsListFromApi } from './features/AllPokemon/repository';

function App() {
  
  getPokemonsListFromApi();

  return (
    <div className="App">
      <HeaderComponent />
      <SearchComponent />
      <PokemonListComponent />
    </div>
  );
}

export default App;
