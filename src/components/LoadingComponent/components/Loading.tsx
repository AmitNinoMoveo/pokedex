import React from 'react';
import '../styles/Loading.css';
import PikatchuAnimation from '../../../utils/images/pikatchu-animation.gif';

const LoadingComponent = () => {
    return (
        <div className='loading-container'>
            <img src={PikatchuAnimation} alt="pokemon-loading" />
        </div>
    );
};

export default LoadingComponent
