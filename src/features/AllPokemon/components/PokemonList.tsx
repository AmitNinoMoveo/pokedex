import React, { useEffect } from "react";
import '../styles/PokemonList.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { allPokemonFetchListAction } from "../state/actions";
import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces";
import PokemonItemComponent from "./PokemonItem";
import { SinglePokemonResetState } from "../../SinglePokemon/state/actions";
import PagesComponent from "./Pages";
import LoadingComponent from "../../../components/LoadingComponent/components/Loading";

const AllPokemonComponent = () => {
  const pokemonList = useSelector(
    (state: RootState) => state.allPokemonState.pokemonList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if(pokemonList && !pokemonList.length){
      dispatch(allPokemonFetchListAction());
    };
    dispatch(SinglePokemonResetState());
    // eslint-disable-next-line
  }, []);

  const PokemonList = () => (
    <div className="pokemon-list-container">
      {pokemonList.length ? (
        pokemonList.map((pokemon: PokemonItemInterface) => {
          return <PokemonItemComponent key={pokemon.id} pokemon={pokemon} />;
        })
      ) : (
        <LoadingComponent />
      )}
    </div>
  );

  return (
    <div className="allpokemon-container" >
      <PagesComponent />
      <PokemonList />
    </div>
  );
};

export default AllPokemonComponent;
