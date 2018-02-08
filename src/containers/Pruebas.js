import React, { Component } from 'react';
import { connect } from 'react-redux';

import Resultado from './../components/pruebas/Resultado';
import Ponmejis from './../components/pruebas/Ponmejis';
import Contador from './../components/pruebas/Contador';
import Restamejis from './../components/pruebas/Restamejis';
import Quitamejis from './../components/pruebas/Quitamejis';
import * as actionTypes from './../store/actions'
import $ from 'jquery';


class Pruebas extends Component {

    componentDidMount() { // añade un elemento al array valueinput con el valor de mejillones (por defecto siempre 1)
        // var arr = [...this.props.valueinput];
        // arr.push(1);
        // this.props.devuelveresult(arr);
        $('html,body').animate({ scrollTop: $("footer").offset().top }, 'slow');
    }
    sumar = () => {  //Botón suma
        this.props.sumar(this.props.posicion);
        // var arr = [...this.props.valueinput];
        // var contenidoI = arr[this.props.posicion];
        // arr[this.props.posicion] = contenidoI + 1;
        // this.props.devuelveresult(arr);
    }
    restar = () => {  //Botón resta
        if (this.props.edita[this.props.posicion].mejillones > 0){
            this.props.restar(this.props.posicion);
        }

        // var arr = [...this.props.valueinput];
        // var contenidoI = arr[this.props.posicion];
        // if (contenidoI > 0) {
        //     arr[this.props.posicion] = contenidoI - 1;
        //     this.props.devuelveresult(arr);
        //}
    }
    // eliminar = () => { // Borra del array
    //     console.log(this.props.edita[this.props.posicion].id)
    //     this.props.eliminando(this.props.edita[this.props.posicion].id);
    //     //this.props.noeditando(this.props.posicion);

    //     //Materialize.toast('¡Eliminada!', 4000);  ---> incluir para que funcione.
    // }

    renderNormal() {
        return (

            <div id="conchas" className="col s12 m6 l4 xl3">
                <div className="card-panel hoverable grey lighten-4">
                    <div className="commentText inline">
                        {this.props.children}
                    </div>
                    <Resultado valueInput={this.props.edita[this.props.posicion].mejillones} />
                    <Ponmejis dameresultado={this.sumar} />
                    <Contador valueInput={this.props.edita[this.props.posicion].mejillones} />
                    <Restamejis dameresultado={this.restar} />
                    <span> </span>
                    <Quitamejis dameresultado={() => this.props.editando(this.props.posicion)} />
                </div>
            </div>
        );
    }
    renderBorra() {
        return (
            <div className="col s12 m6 l4 xl3">
                <div className="card-panel hoverable grey lighten-4">
                    <h6 className="regular"> ¿Estás seguro de eliminar</h6>
                    <h6 className="regular"> la {this.props.children} ?</h6>
                    <i className="material-icons red-text tooltipped" data-position="bottom" data-delay="50" data-tooltip="Eliminar" onClick={() => this.props.elimina(this.props.edita[this.props.posicion].id)}>delete</i>
                    <span className="red-text left" onClick={() => this.props.elimina(this.props.edita[this.props.posicion].id)}>Sí </span>
                    <i className="material-icons green-text right" onClick={() => this.props.noeditando(this.props.posicion)}>not_interested</i>
                    <span className="green-text right" onClick={() => this.props.noeditando(this.props.posicion)}>Volver </span>

                </div></div>
        );
    }

    render() {
        return this.props.edita[this.props.posicion].editando ? this.renderBorra() : this.renderNormal();
    }
}

const mapStateToProps = state => {
    return {
        edita: state.cuantosNum
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editando:   (posicion) => dispatch({ type: actionTypes.EDITANDOCONCHA, payloadPosicion: posicion }),
        noeditando: (posicion) => dispatch({ type: actionTypes.NOEDITANDOCONCHA, payloadPosicion: posicion }),
        sumar:      (posicion) => dispatch({ type: actionTypes.SUMAMEJILLON, payloadPosicion: posicion }),
        restar:     (posicion) => dispatch({ type: actionTypes.RESTAMEJILLON, payloadPosicion: posicion }),
        elimina:    (id) => dispatch({ type: actionTypes.ELIMINACONCHA, payloadId: id })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Pruebas);