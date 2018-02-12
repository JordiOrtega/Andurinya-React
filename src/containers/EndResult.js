import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EndResult extends Component {
  
    recuenta = (valor) => {
       
       return  this.props.endResult.filter((a) =>  a === valor).length;
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

                        <button onClick={() => this.props.history.replace('/')} className="waves-effect waves-light btn ">Volver</button>
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




