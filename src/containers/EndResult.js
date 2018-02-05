import React, { Component } from 'react';

class EndResult extends Component {
  
    shouldComponentUpdate (nextProps, nextState){
        // conseguimos que únicamente se actualice cuando generamos un nuevo día.
        // motivo por el cual se genera nuevo día al pedir resultado final.
        // para que tenga en cuenta el resultado del último día.
        return this.props.endResult !== nextProps.endResult;
    }

    recuenta = (valor) => {
      return  this.props.endResult.filter((a) =>  a == valor).length;
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
            </div>
        );
    }
}

export default EndResult;