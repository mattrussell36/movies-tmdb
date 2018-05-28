import React from 'react';
import Checkbox from '../Checkbox/Checkbox';
import Range from '../Range/Range';
import Field from '../Field/Field';

const Controls = (props) => (
    <div className="Controls">
        <Field border>
            <Range
                name="rating"
                label="Rating"
                value={props.rating}
                onChange={props.handleChange}
                min={0}
                max={10}
            />
        </Field>
        <Field border>
            <Checkbox
                name="matchAll"
                label="Match all genres"
                checked={props.matchAll}
                onChange={props.handleChange}
            />
        </Field>
        {props.genres.map(genre => (
            <Field key={genre.id}>
                <Checkbox
                    key={genre.id}
                    name={genre.name}
                    label={genre.name}
                    checked={genre.checked}
                    onChange={props.handleGenreChange}
                />
            </Field>
        ))}
    </div>
);

export default Controls;