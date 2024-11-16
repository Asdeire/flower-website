import React from 'react';

const GreenButton = (props) => {
    return (
        <button className="btn" onClick={props.onClick}>
            <p>{props.paragraph}</p>
            <h3>{props.h3}</h3>
        </button>
    );
};

export default GreenButton;
