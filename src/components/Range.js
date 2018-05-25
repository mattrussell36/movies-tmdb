import React from 'react';

const Range = (props) => (
    <div className="Range">
        <label className="Range-label" htmlFor={props.name}>{props.label}</label>
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
        <span className="Range-value">{props.value}</span>
    </div>
);

export default Range;