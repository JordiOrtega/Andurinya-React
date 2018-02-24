import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dia from './Dia';
import Modal from '../components/modal/Modal';
import Begin from './../components/inicia/Begin'
import Footer from './Layout/Footer';
import * as actionTypes from './../store/actions'
// import $ from 'jquery';


class Inicia extends Component {

    state = {
        modalopen: { isopen: false, modaltext: 0}
    }

    // componentDidMount() {
    //     // Si hemos pulsado resultado y el último día añadido por usuario no contenia intentos:
    //     // escondemos el último dia generado y el anterior sin ningún intento introducido.
    //     // cuando volvemos de la ruta resultado no se mostrarán.
    //     if (this.props.cuantosdias.slice(-1).pop() === "FIN" &&
    //         this.props.cuantosnum.filter(deundia => deundia.dia === this.props.cuantosdias.length - 1).length === 0) {
    //         $('#dia:nth-last-child(-n+3)').hide();  //https://www.w3.org/TR/selectors-3/#nth-last-child-pseudo
    //     }
    // }
    escondeModal = () => {
        this.setState(prevState => ({
            modalopen: {
                ...prevState.modal,
                isopen: false,
            }
        }));
    }
    infoModal = (id) => {
        this.setState(prevState => ({
            modalopen: {
                ...prevState.modal,
                isopen: true,
                modaltext: id
            }
        }))
    }
    
    nuevoResultado = () => {
        if (this.props.cuantosdias.length > 0) {
            let arraydeundia = this.props.cuantosnum.filter(deundia => deundia.dia === this.props.cuantosdias.length);
            let intentos = arraydeundia.length
            if (intentos > 0) {
                // filtra los mejillones del día actual y los suma con reduce.: 
                let sumalos = arraydeundia.map(x => x.mejillones).reduce((a, b) => a + b);

                if (sumalos > intentos) {
                    this.props.nuevoresultado("Suerte");
                } else if (sumalos < intentos) {
                    this.props.nuevoresultado("Timo");
                } else {
                    this.props.nuevoresultado("Justo");
                }
            }
        }

    }
    nuevoDia = (texto) => {
        if (this.props.cuantosdias.slice(-1).pop() !== "FIN") {
            this.nuevoResultado();
            if (this.props.cuantosnum.filter(deundia => deundia.dia === this.props.cuantosdias.length).length > 0 || this.props.cuantosdias.length === 0 || texto === "FIN") { // si hay intentos en el dia anterior o estamos en el primer día.
                this.props.nuevodia(texto);
            } else if (texto !== 'FIN') {
                this.infoModal(0);
            }
        } else {
            this.infoModal(1);
        }
    }
    anadeDia = (texto, i) => {
        return (
            <Dia
                key={i}
                index={i}
                cuantosdias={this.props.cuantosdias.length}
                infoModal={this.infoModal}
            >
                {texto}{i + 1}
            </Dia>
        );
    }
    whatDoIHaveToMap = () => {
        let x = [...this.props.cuantosdias];
        if (this.props.cuantosdias.slice(-1).pop() === "FIN"){

            if(this.props.cuantosnum
                            .filter(deundia => 
                            deundia.dia === this.props.cuantosdias.length - 1)
                            .length === 0) {
                return x.splice(-2);
            }else{
            return x.splice(-1);
            }
        }
        else return x;
    }   
    render() {
        let thisIsToMap = this.whatDoIHaveToMap();
        return (
            <div>
                <Begin nuevoDia={this.nuevoDia} />
                {thisIsToMap.map(this.anadeDia)}
                {this.state.modalopen.isopen?
                    <Modal
                    modaltext={this.state.modalopen}
                    onclose={this.escondeModal}
                    />
                    :null}
                <Footer
                    nuevoDia={this.nuevoDia} />
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
        nuevodia: (texto) => dispatch({ type: actionTypes.NUEVODIA, payloadTexto: texto })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inicia);

