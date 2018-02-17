import React from 'react';

const contador = (props) => (
    <div className="input-field inline secondary-text-color ">
        <input className="input center-align " value={props.valueInput} readOnly/>
    </div>
);

export default contador;