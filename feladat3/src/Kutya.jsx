import React from 'react';
import './_colors.scss';

const Kutya = ({ imgSrc, fetchNextDog }) => {
    return (
        <div className="dog d-flex flex-column align-items-center justify-content-center p-3">
            <h2 className="text-center mb-2">Kutyák</h2>
            <div className="dog__image-container text-center">
                <img className="dog__image img-fluid mb-4" src={imgSrc} alt="kutya kép" />
            </div>
            <button className="btn btn-primary text-white" onClick={fetchNextDog}>Következő</button>
        </div>
    );
};

export default Kutya;