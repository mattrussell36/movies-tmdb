import React from 'react';
import Checkbox from './Checkbox';
import Range from './Range';

const Controls = (props) => (
    <div>
        <Range
            name="rating"
            label="Rating"
            value={props.rating}
            onChange={props.handleChange}
            min={0}
            max={10}
        />
        <hr/>
        <Checkbox
            name="matchAll"
            label="Match all genres"
            checked={props.matchAll}
            onChange={props.handleChange}
        />
        {props.genres.map(genre => (
            <Checkbox
                key={genre.id}
                name={genre.name}
                label={`${genre.name} | ${genre.id}`}
                checked={genre.checked}
                onChange={props.handleGenreChange}
            />
        ))}
    </div>
);

export default Controls;