import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Dia from './Dia';
import EndResult from './EndResult';
import * as actionTypes from './../store/actions'
import $ from 'jquery';


class Inicia extends Component {
    state = {
        habemusintentus: false
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.cuantosdias.length > 0;
    // }

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
            if (this.state.habemusintentus || this.props.cuantosdias.length === 0) { // si hay intentos en el dia anterior o estamos en el primer día.
                
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
    muestraResultado = () => {
            let buttons = [".btn"];
                buttons.forEach((boton) => { $(boton).prop("disabled", true); }); // desactiva botones
            //this.desactivalinks(); //todos.
            if(this.props.cuantosnum.filter(deundia => deundia.dia ===  this.props.cuantosdias.length) === 0 ){ 
                $('#dia:last-child').hide();
            }else{ // para que tenga en cuenta el resultado del último día que sí tiene intentos, genero otro día.
                this.nuevoDia("FIN");
            }
       
    }

    render() {
        
        return (
            <div>
                <div className="row section">
                    <div className="col s5 center-align">
                        <button onClick={() => this.nuevoDia("Día: ")} className="waves-effect waves-light btn ">Nuevo día</button>
                    </div>
                    <div className="col s1"></div>
                    <div className="col s5 center-align">
                    <Link to="/resultado">
                        <button onClick={() =>this.muestraResultado() } className="waves-effect waves-light btn ">Resultado</button>
                    </Link>
                    </div>
                    <div className="col s1"></div>
                </div>
                    <div className="row container"><br />
                        {/*  Pass props with component on route by omarjmh on https://github.com/ReactTraining/react-router/issues/4105 */}
                    
                        <Route path="/resultado" exact component={() => <EndResult endResult={this.props.resultadodia} />} />   
                        {/* <Route path="/resultado" exact component={EndResult} />    */}
                   
                       
                     
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
        nuevoresultado: (nuevores) => dispatch({ type: actionTypes.NUEVORESULTADO, payloadResultado: nuevores }),
        nuevodia: (texto) => dispatch({ type: actionTypes.NUEVODIA, payloadTexto: texto  })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inicia);

