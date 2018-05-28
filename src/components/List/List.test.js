import React from 'react';
import ReactDOM from 'react-dom';
import List, { 
    filterByRating,
    filterByGenre,
    filterByGenreMatchAll,
    sortByPopularity,
    filterMovies
} from './List';

describe('List.js', () => {
    const movies = [
        { id: 1, genre_ids: [ 1 ], vote_average: 5, popularity: 300 },
        { id: 2, genre_ids: [ 2 ], vote_average: 7, popularity: 100 },
        { id: 3, genre_ids: [ 1, 2 ], vote_average: 8, popularity: 200 },
        { id: 3, genre_ids: [ 3, 4 ], vote_average: 8, popularity: 200 }
    ];
    const genres = [1, 2, 3, 4];
    const rating = 6;
    const selectedGenres = [1];

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List 
            rating={5} 
            selectedGenres={selectedGenres} 
            matchAll={false} 
            movies={movies}
            genres={genres}
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('filters by rating', () => {
        expect(filterByRating(movies[0], rating))
            .toBe(false);
            expect(filterByRating(movies[1], rating))
            .toBe(true);
    });
    
    it('filters by genre', () => {
        expect(filterByGenre(movies[0], selectedGenres))
            .toBe(true);
        expect(filterByGenre(movies[1], selectedGenres))
            .toBe(false);
    });

    it('filters by genre and matches all genres', () => {
        expect(filterByGenreMatchAll(movies[0], [1], false))
            .toBe(true);
        expect(filterByGenreMatchAll(movies[0], [1, 2], true))
            .toBe(false);
    });

    it('sorts by popularity', () => {
        expect(sortByPopularity(
            movies[0],
            movies[1]
        )).toBe(-1);
        expect(sortByPopularity(
            movies[1],
            movies[0]
        )).toBe(1);
    });

    it('filters all movies', () => {
        expect(filterMovies({
            movies,
            rating: 9,
            selectedGenres,
            matchAll: false,
        })).toEqual([]);

        expect(filterMovies({
            movies,
            rating: 4,
            selectedGenres,
            matchAll: false,
        })).toEqual([movies[0], movies[2]])

        expect(filterMovies({
            movies,
            rating: 4,
            selectedGenres: [1, 2],
            matchAll: true,
        })).toEqual([movies[2]])
    });
});