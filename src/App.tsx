import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./styles/app/App.css";
import HeaderComponent from "./components/HeaderComponent/components/HeaderComponent";
import SearchComponent from "./components/SearchComponent/components/SearchComponent";
import AllPokemonComponent from "./features/AllPokemon/components/PokemonList";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SearchComponent />
      <BrowserRouter>
        <Switch>
          <Route path="/all">
            <AllPokemonComponent />
          </Route>
          {/* <Route path="/single/:id">
            <SinglePokemonComponent />
          </Route> */}
          <Route>
            <Redirect to="/all" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
