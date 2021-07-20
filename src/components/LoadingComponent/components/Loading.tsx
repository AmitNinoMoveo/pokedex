import React from 'react';
import '../styles/Loading.css';

const LoadingComponent = () => {
    return (
        <div className='loading-container'>
            <img src="utils/images/pikatchu-animation.gif" alt="pokemon-logo-img" />
        </div>
    );
};

export default LoadingComponent
