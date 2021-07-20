import React from 'react'
import '../../../styles/app/Header.css';
import { onClickRedirectHome } from '../utils/utils';

const HeaderComponent = () => {

    return (
        <div className="container-app-header" onClick={onClickRedirectHome}>
            <img src="utils/images/pokemon-logo-img.svg" alt="pokemon-logo-img" />
        </div>
    )
}

export default HeaderComponent;
