import React from 'react';
import Botones from '../botones/botones';
import { Link } from 'react-router-dom';


const table = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col s12 m1"> &nbsp; </div>
                <div className="col s12 m4 center">
                    <Link to="/">
                        <Botones icon={null} tipo={"btn"} color={"accent-color"} >Volver</Botones>
                    </Link>
                </div>
                <div className="col s12 m2"> &nbsp;</div>
                <div className="col s12 m4 center">
                    <Botones icon={null} tipo={"btn"} color={"accent-color"} dameresultado={() => props.storeresult()} >Guardar resultado</Botones>
                </div>
                <div className="col s12 m1">&nbsp;</div>

            </div>

            <div className="row  center-align">
                <Link to="/estadisticas">
                    <Botones icon={null} tipo={"btn"} color={"accent-color"}>Estadísticas</Botones>
                </Link>

            </div>
        </div>
    );
}

export default table;