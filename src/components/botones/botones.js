import React from 'react';

const botones = (props) => {

    let boton = null;

    boton = (props.disabled) ? 
        (
            <a  className= {[props.tipo, "waves-effect", props.color].join(' ')} >
                    <i className="material-icons"> {props.icon} </i>
                    {props.children}
            </a>
        ) 
        : 
        (
            <a  className= {[props.tipo, "waves-effect", props.color].join(' ')}
                onClick={props.dameresultado}>
                <i className="material-icons">
                    {props.icon}
                </i>
                {props.children}
            </a>
        );


    return(<div className="input-field inline"> {boton} </div>);
   
}

export default botones;