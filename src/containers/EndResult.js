import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from './../firebase';

import Footer from './Layout/Footer';
import { ButtonER, TableER } from './../components/endresult';

class EndResult extends Component {
  
    recuenta = (valor) => {
       
       return  this.props.endResult.filter((e) =>  e === valor).length;
    }
    storeresult = () => {
        const result = {
            key: new Date().toJSON().slice(0,10),
            justo: this.recuenta("Justo"),
            suerte: this.recuenta("Suerte"),
            timo: this.recuenta("Timo")
        }
        axios.post('/results.json', result)
            .then(response => window.Materialize.toast('Registro salvado correctamente', 4000))
            .catch(error => alert("Ha habido un error: " + error));
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




