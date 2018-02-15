import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Dia from './Dia';
import EndResult from './EndResult';
import Botones from './../components/botones/botones'
import * as actionTypes from './../store/actions'
import $ from 'jquery';


class Inicia extends Component {
    state = {
        habemusintentus: false
    }
    componentDidMount(){ 
        // Si hemos pulsado resultado y el último día añadido por usuario no contenia intentos:
        // escondemos el último dia generado y el anterior sin ningún intento introducido.
        // cuando volvemos de la ruta resultado no se mostrarán.
        if (this.props.cuantosdias.slice(-1).pop() === "FIN" && 
            this.props.cuantosnum.filter(deundia => deundia.dia ===  this.props.cuantosdias.length - 1).length === 0 ){ 
            $('#dia:nth-last-child(-n+2)').hide();  //https://www.w3.org/TR/selectors-3/#nth-last-child-pseudo
        }
    }
    nuevoDia = (texto) => {
        if (this.props.cuantosdias.slice(-1).pop() !== "FIN" ){
            if (this.props.cuantosdias.length > 0){
                let arraydeundia = this.props.cuantosnum.filter(deundia => deundia.dia ===  this.props.cuantosdias.length);
                    let intentos = arraydeundia.length
                    if (intentos > 0){
                        // filtra los mejillones del día actual y los suma con reduce.: 
                        let sumalos = arraydeundia.map(x => x.mejillones).reduce((a, b) => a + b );
                        
                        if (sumalos > intentos) { 
                            this.props.nuevoresultado("Suerte");
                        } else if (sumalos < intentos) {
                            this.props.nuevoresultado("Timo");
                        } else {
                            this.props.nuevoresultado("Justo");
                        }
                    }
            }
            this.setState({ habemusintentus: false });
            if (this.state.habemusintentus || this.props.cuantosdias.length === 0 || texto === "FIN") { // si hay intentos en el dia anterior o estamos en el primer día.
                
                    this.props.nuevodia(texto);
                
            }else if (texto !== 'FIN'){ 
                alert("Para añadir otro día:\nTienes que añadir intentos."); 
            }
        } else {
            $('#dia:last-child').hide();
        }
    }
    anadeDia = (texto, i) => {
        return (
            <Dia 
                key={i}
                index={i}
                cuantosdias={this.props.cuantosdias.length}
                habemusintentus={(habemusintentus) => this.setState({ habemusintentus })}
            > 
                        {texto}{i + 1}
            </Dia>
        );
    }
    render() {
        return (
            <div>
                <div className="row section">
                    <div className="col s5 center-align">
                        <Botones icon={null} tipo={"btn"} dameresultado={() => this.nuevoDia("Día: ")}>Nuevo día</Botones>
                    </div>
                    <div className="col s1"></div>
                    <div className="col s5 center-align">
                    <Link to="/resultado" onClick={() => this.nuevoDia("FIN")}> {/* onClick en Link y no en Botones */}
                        <Botones icon={null} tipo={"btn"}>Resultado</Botones>
                    </Link>
                    </div>
                    <div className="col s1"></div>
                </div>
                {this.props.cuantosdias.map(this.anadeDia)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        resultadodia: state.resultadoFinal,
        cuantosnum: state.cuantosNum,
        cuantosdias: state.cuantosDias
    };
};

const mapDispatchToProps = dispatch => {
    return {
        nuevoresultado: (nuevores)  => dispatch({ type: actionTypes.NUEVORESULTADO, payloadResultado: nuevores }),
        nuevodia:       (texto)     => dispatch({ type: actionTypes.NUEVODIA, payloadTexto: texto  })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inicia);

