import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';

import Pruebas from './Pruebas';
import Total from './Total';
import Mejillon from '../components/dia/Mejillon';
import * as actionTypes from './../store/actions'
import $ from 'jquery';

class Dia extends Component {

    componentDidMount() {
        // se esconde el último día generado para obtener los resultados sino se hace scroll al footer.
        this.props.pulsado ? $('#dia:last-child').hide() : $('html,body').animate({ scrollTop: $("footer").offset().top }, 'slow');
    }

    nuevo = (texto) => {
       
        this.props.habemusintentus(true); //sí hay intentos
            if (this.props.index + 1 >= this.props.cuantosdias) {
               
                this.props.nuevo(this.props.cuantosdias);
                if ($("#footer #image").length === 0) {
                    var clonamejillon = $('#image').clone();
                    $(clonamejillon).prependTo('#footer');
                }
            } else {
                Modal.info({
                    title: 'Ya no puedes añadir más intentos.',
                    content: (
                      <div>
                        <p>Sigue evaluando con el siguiente día.</p>
                        <p>O refresca para volver a empezar.</p>
                      </div>
                    ),
                    maskClosable:true,
                    onOk() {},
                  });
            }
    }
    cadaIntento = (i, indice) => {
        return (
            <Pruebas 
                key={i}
                posicion={this.props.cuantosnum.findIndex(x => x.id === i)}
                index={this.props.cuantosnum.id} >
                    {"Concha número: "}{indice + 1}
            </Pruebas>
        );
    }

    render() {
        let arraydeundia = this.props.cuantosnum.filter(deundia => deundia.dia === this.props.index + 1);
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
                                intentos={arraydeundia.length}                              // se envía número de intentos (conchas) de un día.
                                valueinput={arraydeundia.map(x => x.mejillones)}            // array con los mejillones que hay en cadada intento (concha) de un día.
                                cuantosdias={this.props.cuantosdias}                        // array con el número de días en el que se han hecho pruebas.
                                nuevoresultado={this.props.nuevoResultado}                  // método que actualiza el array EndResult que contiene strings con el resultado diario : Justo , Suerte o Timo. 
                                pulsado={this.props.pulsado}                                // controla si se ha solicitado el resultado final de todos los días.
                            />
                        </div>
                    </div>

                    {arraydeundia.map((eachelement, i) => this.cadaIntento(eachelement.id, i))}

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
        nuevo: (dia) => dispatch({ type: actionTypes.NUEVACONCHA, payloadDia: dia })
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dia);