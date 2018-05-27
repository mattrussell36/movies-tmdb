import React, { Component } from 'react';
import Card from '../Card/Card';
import './List.css';

class List extends Component {
    filterByRating(movie) {
        return movie.vote_average >= parseInt(this.props.rating, 10);
    }

    filterByGenre(movie) {
        const { selectedGenres } = this.props;

        if (!selectedGenres.length) {
            return true;
        }

        for (const genreId of selectedGenres) {
            if (movie.genre_ids.includes(genreId)) {
            return true;
            }
        }

        return false;
    }

    filterByGenreMatchAll(movie) {
        const { selectedGenres, matchAll } = this.props;

        if (!selectedGenres.length || !matchAll) {
            return true;
        }

        return selectedGenres.every(genreId => movie.genre_ids.includes(genreId));
    }

    sortByPopularity(movieA, movieB) {
        return movieA.popularity < movieB.popularity ? 1 : -1;
    }

    filterMovies() {
        return this.props.movies
            .filter(movie => this.filterByRating(movie))
            .filter(movie => this.filterByGenre(movie))
            .filter(movie => this.filterByGenreMatchAll(movie))
            .sort((movieA, movieB) => this.sortByPopularity(movieA, movieB));
    }

    render() {
        const movies = this.filterMovies();
        
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