import React from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent/components/HeaderComponent';
import SearchComponent from './components/SearchComponent/components/SearchComponent';
import PokemonListComponent from './features/AllPokemon/components/PokemonList/PokemonListComponent';

function App() {

  return (
    <div className="App">
      <HeaderComponent />
      <SearchComponent />
      <PokemonListComponent />
    </div>
  );
}

export default App;
