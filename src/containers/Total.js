import React, { Component } from 'react';

class Total extends Component {

    state = {
        pintaresultado: ""
    }

    componentWillReceiveProps (nextProps){
        if(nextProps.cuantosdias > this.props.cuantosdias) {
            if (!this.props.pulsado) {
                var arr = [...this.props.valueinput];
                if (arr.length > 0) {
                    var sumalos = arr.reduce(function (a, b) { return a + b; });
                    if (sumalos > this.props.intentos) {
                        this.enviaTotal("Suerte");
                    } else if (sumalos < this.props.intentos) {
                        this.enviaTotal("Timo");
                    } else {
                        this.enviaTotal("Justo");
                    }
                }
            }
        }
    }
    enviaTotal = (total) => {
        this.setState({ pintaresultado: <div className="chip">{total}</div> });
        this.props.nuevoresultado(total);
    }

    render() {
        return (
            <div className="valign-wrapper">
                {this.state.pintaresultado}
            </div>
        );
    }
}

export default Total;