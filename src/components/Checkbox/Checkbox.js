import React from 'react';

const Checkbox = (props) => (
    <div className="Checkbox">
        <input 
            type="checkbox" 
            className="Checkbox-input"
            name={props.name}
            id={props.name}
            checked={props.checked}
            onChange={props.onChange}
        />
        <label className="Checkbox-label" htmlFor={props.name}>{props.label}</label>
    </div>
);

export default Checkbox;