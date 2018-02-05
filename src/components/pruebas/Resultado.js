import React from 'react';

const resultado = (props) => {

    let resultado = '';

    if (props.valueInput === 1) {
        resultado = <i className="material-icons green-text">done</i>;
    } else if (props.valueInput < 1) {
        resultado = <i className="material-icons red-text">thumb_down</i>;
    } else {
        resultado = <i className="material-icons purple-text">thumb_up</i>;
    }
    return (
        <div>
            {resultado}
        </div>
    );
}

export default resultado;