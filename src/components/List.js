import React, { Component } from 'react';

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

    filterMovies() {
        return this.props.movies
            .filter(movie => this.filterByRating(movie))
            .filter(movie => this.filterByGenre(movie))
            .filter(movie => this.filterByGenreMatchAll(movie));
    }

    render() {
        const movies = this.filterMovies();

        return (
            <ul className="App-list">
                {movies.map(movie => (
                <li 
                    key={movie.id}
                    className="App-list-item"
                >
                    {movie.original_title} | {movie.vote_average} | {movie.genre_ids.join(', ')}
                </li>
                ))}
            </ul>
        );
    }
}

export default List;