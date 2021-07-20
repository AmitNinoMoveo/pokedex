import React, { useEffect } from "react";
import '../styles/PokemonList.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { allPokemonFetchListAction } from "../state/actions";
import { PokemonItemInterface } from "../utils/AllPokemonFeatureInterfaces";
import PokemonItemComponent from "./PokemonItem";
import { SinglePokemonResetState } from "../../SinglePokemon/state/actions";

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
    <>
      {pokemonList.length ? (
        pokemonList.map((pokemon: PokemonItemInterface) => {
          return <PokemonItemComponent key={pokemon.id} pokemon={pokemon} />;
        })
      ) : (
        <p>No Pokemon!</p>
      )}
    </>
  );

  return (
    <div className="container" >
      <PokemonList />
    </div>
  );
};

export default AllPokemonComponent;
