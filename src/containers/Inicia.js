import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dia from './Dia';
import Modal from '../components/modal/Modal';
import Begin from './../components/inicia/Begin'
import Footer from './Layout/Footer';
import { updateObject, whatDoIHaveToMap } from './../utils/utils'
import * as actionTypes from './../store/actions'

class Inicia extends Component {

    state = {
        modalopen: { isopen: false, modaltext: 0}
    }

    escondeModal = () => {
        const hideModal = updateObject(this.state.modalopen, {isopen: false} )
        this.setState({modalopen: hideModal});
    }
    infoModal = (id) => {
        const info = updateObject(this.state.modalopen, {isopen: true, modaltext: id})
        this.setState({modalopen: info});
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
    render() {
        let thisIsToMap = whatDoIHaveToMap(this.props.cuantosdias, this.props.cuantosnum);
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

