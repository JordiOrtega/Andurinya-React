import React from 'react';

const quitamejis = (props) => (
    <div className="input-field inline">
        <a className="btn-floating waves-effect waves-light red" onClick={props.dameresultado}><i className="material-icons">cancel</i></a>
    </div>
);

export default quitamejis;