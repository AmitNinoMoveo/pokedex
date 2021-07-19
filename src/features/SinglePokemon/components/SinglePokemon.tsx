import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../state/store";
import { generatePokemonIdString } from "../../../utils/utils";
import { SinglePokemonFetchAction } from "../state/actions";

type Params = {
  id: string;
};

const SinglePokemonComponent = () => {
  const { id } = useParams<Params>();
  const dispatch = useDispatch();
  const pokemon = useSelector((state: RootState) => state.singlePokemonState);

  useEffect(() => {
    dispatch(SinglePokemonFetchAction(+id));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="single-pokemon-container">
      <div className="image-title-container">
        <p id="id">{generatePokemonIdString(pokemon.id)}</p>
        <div className="pokemon-image" />
        <p className="title">{pokemon.name}</p>
        <div className="pokemon-types-container">
          {pokemon.types.map((type) => (
            <p className={`pokemon-type ${type}-type-color`}>{type}</p>
          ))}
        </div>
      </div>
      <hr />
      <div className="description-stats-container">
        <p className="title">Description</p>
        <p>{pokemon.description}</p>
        <p className="title">Stats</p>
        <div className="stats-container">
          {pokemon.stats.map((stat) => (
            <p>{`${stat.name}: ${stat.value}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePokemonComponent;
