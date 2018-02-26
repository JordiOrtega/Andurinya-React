import React, { Component } from 'react';

import Mejillon from './Mejillon'

class Diac extends Component {

    componentDidMount() {
        this.focusConcha.scrollIntoView();
    }

    render() {
        return (
            <div id="dia" className="row">
                <div className="col m1">
                </div>
                <div className="col s12 m10 default-primary-color z-depth-2"
                     ref={(divdia) => { this.focusConcha = divdia }}>
                    <blockquote className="accent-color-border">
                        <p className="flow-text text-primary-color">{this.props.texto}
                            <span className="text-primary-color"> Pulsa el mejillón para añadir intentos:</span>
                        </p>
                    </blockquote>
                    <div className="row">
                        <div className="col s4 m2 l1">
                            <Mejillon clicked={this.props.nuevo} />
                        </div>
                        <div className="col s8 m10 l11">
                            {this.props.total}
                        </div>
                    </div>
                    {this.props.arraydeundia.map((eachelement, i) => this.props.cadaIntento(eachelement.id, i))}
                </div>
                <div className="col m2 l1">
                </div>
            </div>
        );
    }
}

export default Diac;

