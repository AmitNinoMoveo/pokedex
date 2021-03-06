import React, { useEffect } from "react";
import "../styles/singlePokemon.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../state/store";
import {
  generatePokemonIdString,
  getPokemonTypeColor,
  toTitleCase,
  toTitleCaseSingle,
} from "../../../utils/utils";
import { SinglePokemonFetchAction } from "../state/actions";
import LoadingComponent from "../../../components/LoadingComponent/components/Loading";

type Params = {
  id: string;
};
// hi
const SinglePokemonComponent = () => {
  const { id } = useParams<Params>();
  const dispatch = useDispatch();
  const pokemon = useSelector((state: RootState) => state.singlePokemonState);

  useEffect(() => {
    dispatch(SinglePokemonFetchAction(+id));
    // eslint-disable-next-line
  }, []);

  const ImageTitleComponent = () => (
    <div className="image-title-container">
      <div
        className="pokemon-image"
        style={{ backgroundImage: `url(${pokemon.imageUrl})` }}
      />
      <p className="title">{toTitleCaseSingle(pokemon.name)}</p>
      <div className="pokemon-types-container">
        {pokemon.types.map((type: string, i) => (
          <p
            key={i}
            className="pokemon-type"
            style={{ backgroundColor: `${getPokemonTypeColor(type)}` }}
          >
            {toTitleCaseSingle(type)}
          </p>
        ))}
      </div>
    </div>
  );

  const DescriptionStatsComponent = () => (
    <div className="description-stats-container">
      <p className="title">Description</p>
      <p className="description">{pokemon.description}</p>
      <p className="title">Stats</p>
      <div className="stats-container">
        {pokemon.stats.map((stat, i) => (
          <p key={i}>{`${toTitleCase(stat.name)}: ${stat.value}`}</p>
        ))}
      </div>
    </div>
  );

  const SinglePokemonContainer = () => (
    <div className="single-pokemon-container">
      <p id="id">{generatePokemonIdString(pokemon.id)}</p>
      <ImageTitleComponent />
      <div className="divider" />
      <DescriptionStatsComponent />
    </div>
  );

  return pokemon?.id ? <SinglePokemonContainer /> : <LoadingComponent />;
};

export default SinglePokemonComponent;
