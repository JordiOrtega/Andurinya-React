import React, { Component } from 'react';
import { connect } from 'react-redux';

import BorraPruebas from './../components/pruebas/BorraPruebas';
import NuevaPrueba from '../components/pruebas/NuevaPrueba';
import * as actionTypes from './../store/actions'


class Pruebas extends Component {

    sumar = () => {
        this.props.sumar(this.props.posicion);
    }
    restar = () => {
        if (this.props.edita[this.props.posicion].mejillones > 0) {
            this.props.restar(this.props.posicion);
        }
    }
    eliminar = () => {
        this.props.elimina(this.props.edita[this.props.posicion].id);
        window.Materialize.toast('¡Eliminada!', 1000);
    }
    desabilita = () => {
        let valor = (this.props.cuantosdias.slice(-1).pop() === "FIN") ? true : false;
        return valor;
    }
    renderNormal() {
        return (
            <NuevaPrueba 
                texto={this.props.children}
                edita={this.props.edita}
                posicion={this.props.posicion}
                desabilita={this.desabilita}
                sumar={this.sumar}
                restar={this.restar}
                editando={this.props.editando}
            />
        );
    }
    renderBorra() {
        return (
            <BorraPruebas 
                texto={this.props.children}
                eliminar={this.eliminar}
                noeditando={this.props.noeditando}
                posicion={this.props.posicion} />
        );
    }

    render() {
        return this.props.edita[this.props.posicion].editando ? this.renderBorra() : this.renderNormal();
    }
}

const mapStateToProps = state => {
    return {
        edita: state.cuantosNum,
        cuantosdias: state.cuantosDias
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editando:   (posicion) => dispatch ({ type: actionTypes.EDITANDOCONCHA, payloadPosicion: posicion }),
        noeditando: (posicion) => dispatch ({ type: actionTypes.NOEDITANDOCONCHA, payloadPosicion: posicion }),
        sumar:      (posicion) => dispatch ({ type: actionTypes.SUMAMEJILLON, payloadPosicion: posicion }),
        restar:     (posicion) => dispatch ({ type: actionTypes.RESTAMEJILLON, payloadPosicion: posicion }),
        elimina:    (id)       => dispatch ({ type: actionTypes.ELIMINACONCHA, payloadId: id })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Pruebas);