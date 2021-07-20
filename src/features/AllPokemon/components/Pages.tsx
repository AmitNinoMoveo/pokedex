import React from "react";
import '../styles/Pages.css';
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../../components/ButtonComponent/components/Button";
import { allPokemonPageDec, allPokemonPageInc } from "../state/actions";
import { RootState } from "../../../state/store";

const PagesComponent = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state: RootState)=>state.allPokemonState.pageNumber);

  return (
    <div className="pages-container">
      <ButtonComponent
        key={"dec"}
        func={() => {
          dispatch(allPokemonPageDec());
        }}
        txt={"<"}
        />
        <p id="page-indicator">{pageNumber+1}</p>
      <ButtonComponent
        key={"inc"}
        func={() => {
          dispatch(allPokemonPageInc());
        }}
        txt={">"}
      />
    </div>
  );
};

export default PagesComponent;
