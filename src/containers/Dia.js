import React, { Component } from 'react';
import { connect } from 'react-redux';

import Pruebas from './Pruebas';
import Total from '../components/dia/Total';
import Diac from '../components/dia/Diac';
import * as actionTypes from './../store/actions'
import $ from 'jquery';

class Dia extends Component {

    state = {
        modal: {entra:false, title:"", secondarytext:""}
    }

    componentDidMount() {
        // se esconde el último día generado para obtener los resultados sino se hace scroll al footer.
        if (this.props.diasreducer.slice(-1).pop() === "FIN" ){
            //$('#dia:nth-last-child(-n+2)').hide()
        } else{
            $('html,body').animate({ scrollTop: $("footer").offset().top }, 'slow');
        } 
    }
    nuevo = (texto) => {
        if (this.props.diasreducer.slice(-1).pop() !== "FIN" ){
                if (this.props.index + 1 >= this.props.cuantosdias) {
                    this.props.nuevaconcha(this.props.cuantosdias);
                } else {
                    this.props.infoModal(
                        "Ya no puedes añadir más intentos.",
                        "Sigue evaluando con el siguiente día.\n O refresca para volver a empezar."
                    );
                }
        }else{
            this.props.infoModal(2);
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
        let total = null
        if (this.props.resultadodia[this.props.index]){
                total = (  
                    <Total  resultadodia={this.props.resultadodia[this.props.index]} />
                );
        }
        return (
            <Diac 
                total={total}
                nuevo={this.nuevo}
                arraydeundia={arraydeundia}
                cadaIntento={this.cadaIntento}
                texto={this.props.children}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        cuantosnum: state.cuantosNum,
        diasreducer: state.cuantosDias,
        resultadodia: state.resultadoFinal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        nuevaconcha: (dia) => dispatch({ type: actionTypes.NUEVACONCHA, payloadDia: dia })
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dia);