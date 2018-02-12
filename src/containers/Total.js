import React, { Component } from 'react';
import { connect } from 'react-redux';

class Total extends Component {

    render() {
        return (
                <div><div className="chip">{this.props.resultadodia[this.props.dia]}</div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        resultadodia: state.resultadoFinal
    };
};

export default connect(mapStateToProps)(Total);

