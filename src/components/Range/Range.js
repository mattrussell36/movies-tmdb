import React from 'react';
import './Range.css';

const Range = (props) => (
    <div className="Range">
        <label className="Range-label" htmlFor={props.name}>{props.label} <span className="Range-value">({props.value})</span></label>
        <input 
            type="Range" 
            className="Range-input"
            name={props.name}
            id={props.name}
            value={props.value}
            onChange={props.onChange}
            min={props.min}
            max={props.max}
        />
    </div>
);

export default Range;