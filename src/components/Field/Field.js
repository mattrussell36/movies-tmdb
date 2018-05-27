import React from 'react';
import './Field.css';

const Field = (props) => {
    const borderModifier = props.border ?
        'Field--border' : '';

    return (
        <div className={`Field ${borderModifier}`}>
            {props.children}
        </div>
    );
}

export default Field;