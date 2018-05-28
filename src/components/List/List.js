import React, { Component } from 'react';
import Card from '../Card/Card';
import './List.css';

export function filterByRating(movie, rating) {
    return movie.vote_average >= parseInt(rating, 10);
}

export function filterByGenre(movie, selectedGenres) {
    if (!selectedGenres.length) {
        return true;
    }

    return selectedGenres.some(genreId => movie.genre_ids.includes(genreId));
}

export function filterByGenreMatchAll(movie, selectedGenres, matchAll) {
    if (!selectedGenres.length || !matchAll) {
        return true;
    }

    return selectedGenres.every(genreId => movie.genre_ids.includes(genreId));
}

export function sortByPopularity(movieA, movieB) {
    return movieA.popularity < movieB.popularity ? 1 : -1;
}

export function filterMovies({ movies, rating, selectedGenres, matchAll }) {
    return movies
        .filter(movie => filterByRating(movie, rating))
        .filter(movie => filterByGenre(movie, selectedGenres))
        .filter(movie => filterByGenreMatchAll(movie, selectedGenres, matchAll))
        .sort((movieA, movieB) => sortByPopularity(movieA, movieB));
}

class List extends Component {
    render() {
        const movies = filterMovies(this.props);
        
        if (!movies.length) {
            return (
                <div className="List--empty">No movies!</div>
            )
        }

        return (
            <ul className="List">
                {movies.map(movie => (
                    <li key={movie.id} className="List-item">
                        <Card {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}

export default List;