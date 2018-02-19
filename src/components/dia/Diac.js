import React from 'react';

import Mejillon from './Mejillon'

const diac = (props) => (
    <div id="dia" className="row">
    <div className="col m1">
    </div>
    <div className="col s12 m10 default-primary-color z-depth-2">
        <blockquote className="accent-color-border">  
            <p className="flow-text text-primary-color">{props.texto} 
                <span className="text-primary-color"> Pulsa el mejillón para añadir intentos:</span>
            </p> 
        </blockquote>
        <div className="row">
            <div className="col s4 m2 l1">
                <Mejillon clicked={props.nuevo} />
            </div>
            <div className="col s8 m10 l11">
              {props.total}
            </div>
        </div>
        {props.arraydeundia.map((eachelement, i) => props.cadaIntento(eachelement.id, i))}
    </div>
    <div className="col m2 l1">
    </div>
    </div>
);

export default diac;

