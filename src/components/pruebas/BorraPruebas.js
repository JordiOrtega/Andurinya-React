import React from 'react';

const borraPruebas = (props) => (
    <div className="col s12 m12 l6">
        <div className="card-panel hoverable light-primary-color">
            <h6 className="regular secondary-text-color"> ¿Estás seguro de eliminar</h6>
            <h6 className="regular secondary-text-color"> la {props.texto} ?</h6>
            <i className="material-icons red-text tooltipped" data-position="bottom" data-delay="50" data-tooltip="Eliminar" onClick={props.eliminar}>delete</i>
            <span className="red-text left" onClick={props.eliminar}>Sí </span>
            <i className="material-icons green-text right" onClick={() => props.noeditando(props.posicion)}>not_interested</i>
            <span className="green-text right" onClick={() => props.noeditando(props.posicion)}>Volver </span>
        </div>
    </div>
);

export default borraPruebas;