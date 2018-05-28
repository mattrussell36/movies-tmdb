import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="Card">
            <img className="Card-img" src={props.img} alt={props.imgAlt} />
            <div className="Card-body">
                {props.children}
            </div>
        </div>
    );
};

export default Card;