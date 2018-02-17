import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Modal } from 'antd';

import Pruebas from './Pruebas';
import Total from '../components/dia/Total';
import Mejillon from '../components/dia/Mejillon';
import Modal from '../components/modal/Modal';
import * as actionTypes from './../store/actions'
import $ from 'jquery';

class Dia extends Component {

    state = {
        modal: {entra:false, title:"", secondarytext:""}
    }

    componentDidMount() {
        // se esconde el último día generado para obtener los resultados sino se hace scroll al footer.
        if (this.props.diasreducer.slice(-1).pop() === "FIN" ){
            $('#dia:last-child').hide()
        } else{
            $('html,body').animate({ scrollTop: $("footer").offset().top }, 'slow');
        } 
    }
    escondeModal = () => {
        this.setState(prevState => ({
            modal: {
                ...prevState.modal,
                entra: false,
                title: "",
                secondarytext: ""
            }
        }));
    }

    desactivalinks = () => {
        let links = [".btn-floating"];
        links.forEach((link) => { $(link).addClass("disabled") }); 
    }
    nuevo = (texto) => {
        //this.desactivalinks();
        if (this.props.diasreducer.slice(-1).pop() !== "FIN" ){
                if (this.props.index + 1 >= this.props.cuantosdias) {
                    this.props.nuevaconcha(this.props.cuantosdias);
                } else {
                    this.setState(prevState => ({
                        modal: {
                            ...prevState.modal,
                            entra: true, 
                            title: "Ya no puedes añadir más intentos.",
                            secondarytext: "Sigue evaluando con el siguiente día.\n O refresca para volver a empezar."
                        }
                    }))
                }
        }else{
            this.setState(prevState => ({
                modal: {
                    ...prevState.modal,
                    entra: true, 
                    title: "Recarga la página para volver a empezar.",
                    secondarytext: ""
                }
            }))
        //this.desactivalinks(); // Modal: Recarga para volver a empezar.
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
            <div id="dia" className="row">
                <div className="col m1">
                </div>
                <div className="col s12 m10 default-primary-color z-depth-2">
                    <blockquote className="accent-color-border">  
                        <p className="flow-text text-primary-color">{this.props.children} 
                            <span className="text-primary-color"> Pulsa el mejillón para añadir intentos:</span>
                        </p> 
                    </blockquote>
                    <div className="row">
                        <div className="col s4 m1">
                            <Mejillon clicked={this.nuevo} />
                        </div>
                        <div className="col s8 m11">
                          {total}
                        </div>
                    </div>
                    {arraydeundia.map((eachelement, i) => this.cadaIntento(eachelement.id, i))}
                </div>
                <div className="col m1">
                </div>
                <Modal entra={this.state.modal.entra} title={this.state.modal.title} secondarytext={this.state.modal.secondarytext} onclose={this.escondeModal} />
                {/* {this.nuevo()} */}
            </div>

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