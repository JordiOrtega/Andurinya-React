import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from './../firebase';

class EndResult extends Component {
  
    recuenta = (valor) => {
       
       return  this.props.endResult.filter((a) =>  a === valor).length;
    }
    storeresult = () => {
        const result = {
            fecha:  new Date(),
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
                <table >
                    <thead >
                    <tr>
                        <th className="center-align">Justo</th>
                        <th className="center-align">Suerte</th>
                        <th className="center-align">Timo</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="center-align">{this.recuenta("Justo")}</td>
                        <td className="center-align">{this.recuenta("Suerte")}</td>
                        <td className="center-align">{this.recuenta("Timo")}</td>
                    </tr>
                    </tbody>
                </table>
                <div className="row">
                    <div className="col s12 m1"> &nbsp; </div>
                    <div className="col s12 m4 center">
                        <button onClick={() => this.props.history.replace('/')} className="waves-effect waves-light btn ">Volver</button>
                    </div>
                    <div className="col s12 m2"> &nbsp;</div>
                    <div className="col s12 m4 center">
                        <button onClick={() => this.storeresult()} className="waves-effect waves-light btn ">Guardar resultado</button>
                    </div>
                    <div className="col s12 m1">&nbsp;</div>
                        
                </div>
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




