import React, { Component } from 'react';
import { connect } from 'react-redux';

import Pruebas from './Pruebas';
import Total from './Total';
import Mejillon from '../components/dia/Mejillon';
import * as actionTypes from './../store/actions'
import $ from 'jquery';

class Dia extends Component {
    // state = {
    //     //cuantosnum: [], // array usado para añadir pruebas  
    //     valueinput: [], // contiene cantidad de mejillones en cada concha (prueba).
    // }

    componentDidMount() {
        // se esconde el último día generado para obtener los resultados sino se hace scroll al footer.
        this.props.pulsado ? $('#dia:last-child').hide() : $('html,body').animate({ scrollTop: $("footer").offset().top }, 'slow');
    }

    nuevo = (texto) => {
       
        this.props.habemusintentus(true); //sí hay intentos
        if (!this.props.pulsado) {
            if (this.props.index + 1 >= this.props.cuantosdias) {
               
                this.props.nuevo();
                // console.log("--> [[ Nuevo hay elementos en el array de cuantosnum? ]]" + this.props.cuantosnum.length);
                if ($("#footer #image").length === 0) {
                    var clonamejillon = $('#image').clone();
                    $(clonamejillon).prependTo('#footer');
                }
            } else {
                alert("Ya no puedes añadir más intentos.\nSigue evaluando con el siguiente día.");
            }
        } else {
            alert("Ya dispones del resultado.\nRefresca la página para volver a empezar.");
        }
    }
    // eliminarUno = (posicion, id) => {
    //     this.props.elimina(id);
    //     // var arr2 = [...this.state.valueinput];
    //     // arr2.splice(posicion, 1);
    //     // this.setState({ valueinput: arr2 });
    // }
    cadaIntento = (i) => {
        const posicionConcha = this.props.cuantosnum.findIndex(x => x.id === i);
        //console.log("Posición concha" + posicionConcha + "Elementos en el array" + this.props.cuantosnum.length);
        return (
            <Pruebas key={i}
                posicion={posicionConcha}
                index={this.props.cuantosnum.id}
                //eliminando={this.eliminarUno}
                // valueinput={this.state.valueinput}
                //devuelveresult={(valueinput) => this.setState({ valueinput })} 
                >
                    {"Concha número: "}{posicionConcha + 1}
            </Pruebas>
        );
    }

    render() {
        // const arraymejillones = this.props.cuantosnum.map(x => x.mejillones);
        return (
            <div id="dia" className="row">
                <div className="col s1">
                </div>
                <div id={"dia" + this.props.cuantosdias} className="col s10 light-blue lighten-5 z-depth-2">

                    <blockquote>  <p className="flow-text">{this.props.children}  Pulsa el mejillón para añadir intentos:</p> </blockquote>
                    <div className="row">
                        <div className="col s4 m1">

                            <Mejillon clicked={this.nuevo} />
                        </div>
                        <div className="col s8 m11">
                            <Total 
                                intentos={this.props.cuantosnum.length}                     // se envía número de intentos (conchas).
                                valueinput={this.props.cuantosnum.map(x => x.mejillones)}   // array con los mejillones que hay en cadada intento (concha).
                                cuantosdias={this.props.cuantosdias}                        // array con el número de días que se han hecho pruebas.
                                nuevoresultado={this.props.nuevoResultado}                  // método que actualiza el array EndResult que contiene strings con el resultado diario : Justo , Suerte o Timo. 
                                pulsado={this.props.pulsado}                                // controla si se ha solicitado el resultado final de todos los días.
                            />
                        </div>
                    </div>

                    {this.props.cuantosnum.map((eachelement) => this.cadaIntento(eachelement.id))}

                </div>
                <div className="col s1">
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        cuantosnum: state.cuantosNum
        //valueinput: state.valueInput
    };
};

const mapDispatchToProps = dispatch => {
    return {
        nuevo: () => dispatch({ type: actionTypes.NUEVACONCHA })
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dia);