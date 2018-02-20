import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from './../firebase';

import Footer from './Layout/Footer';
import Botones from './../components/botones/botones';
import TableER from './../components/endresult/TableER';
import ButtonER from './../components/endresult/ButtonER';

class EndResult extends Component {
  
    recuenta = (valor) => {
       
       return  this.props.endResult.filter((e) =>  e === valor).length;
    }
    storeresult = () => {
        const result = {
            fecha: new Date().toJSON().slice(0,10),
            justo: this.recuenta("Justo"),
            suerte: this.recuenta("Suerte"),
            timo: this.recuenta("Timo")
        }
        axios.post('/results.json', result)
            .then(response => window.Materialize.toast('Registro salvado correctamente', 4000))
            .catch(error =>console.log(error));
    }
    
    render() {
        
        return (
            <div className="container">
                <TableER recuenta={this.recuenta} />
                <ButtonER storeresult={this.storeresult} />
                <Footer disabled={true}/>             
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        endResult: state.resultadoFinal,
    };
};

export default connect(mapStateToProps)(EndResult);




