import React from 'react';

const botones = (props) => (
    <div className="input-field inline">
        <a  className= {[props.tipo, "waves-effect waves-light", props.color].join(' ')}
            onClick={props.dameresultado}>
                <i className="material-icons">
                    {props.icon}
                </i>
            {props.children}
        </a>
    </div>
);

export default botones;