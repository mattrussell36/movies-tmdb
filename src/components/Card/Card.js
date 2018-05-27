import React from 'react';
import { TMDB_IMG_BASE_URL } from '../../constants';
import './Card.css';

const Card = (props) => (
    <div className="Card">
        <img className="Card-img" src={`${TMDB_IMG_BASE_URL}${props.backdrop_path}`} alt=""/>
        <div className="Card-body">
            <h3>{props.original_title}</h3>
            <p>Popularity: {props.popularity}</p>
            <p>Rating: {props.vote_average}</p>
            <p>Genres: {props.genre_ids.join(', ')}</p>
        </div>
    </div>
);

export default Card;