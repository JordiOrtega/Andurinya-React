import React from 'react';
import { Link } from 'react-router-dom';

import Botones from '../botones/botones'

const begin = (props) => {
    return (
        <div className="row section container">
            <div className="col s5 center-align">
                <Botones icon={null} tipo={"btn"} color={"accent-color"} dameresultado={() => props.nuevoDia("Día: ")}>Nuevo día</Botones>
            </div>
            <div className="col s1">
            </div>
            <div className="col s5 center-align">
                <Link to="/resultado" onClick={() => props.nuevoDia("FIN")}> {/* onClick en Link y no en Botones */}
                    <Botones icon={null} tipo={"btn"} color={"accent-color"}>Resultado</Botones>
                </Link>
            </div>
            <div className="col s1">
            </div>
        </div>
    );
}

export default begin;