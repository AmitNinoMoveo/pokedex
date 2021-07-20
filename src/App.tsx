import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./styles/app/App.css";
import HeaderComponent from "./components/HeaderComponent/components/HeaderComponent";
import SearchComponent from "./components/SearchComponent/components/SearchComponent";
import AllPokemonComponent from "./features/AllPokemon/components/PokemonList";
import SinglePokemonComponent from "./features/SinglePokemon/components/SinglePokemon";
import LoadingComponent from "./components/LoadingComponent/components/Loading";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BrowserRouter>
        <Switch>
          <Route path="/pokemon/:id">
            <SinglePokemonComponent />
          </Route>
          <Route path="/all">
            <SearchComponent />
            <AllPokemonComponent />
          </Route>
          <Route>
            <Redirect from="/*" to="/all" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
