import React from 'react'
import '../../../styles/app/Header.css';
import PokemonLogo from '../../../utils/images/pokemon-logo-img.svg';
import { onClickRedirectHome } from '../utils/utils';

const HeaderComponent = () => {

    return (
        <div className="container-app-header" onClick={onClickRedirectHome}>
            <img src={PokemonLogo} alt="pokemon-logo-img" />
        </div>
    )
}

export default HeaderComponent;
