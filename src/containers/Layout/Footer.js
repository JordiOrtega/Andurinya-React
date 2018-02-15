import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Affix, Button } from 'antd';

import * as actionTypes from './../../store/actions'
import Mejillon from './../../components/dia/Mejillon'
import Botones from './../../components/botones/botones'


class Footer extends Component {
    up = () => {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <footer className="center-align page-footer white" id="footer">
                    <div className="mejillonnav">                         <Mejillon clicked={() => this.props.nuevaconcha(this.props.diasreducer.length)} /></div>
                    <div className="arriba hide-on-med-and-up">           <Botones icon={"expand_less"} tipo={"btn-floating"} color={"grey darken-3"} dameresultado={this.up} />  </div>
                    <div className="fixed-action-btn3 hide-on-med-and-up"><Botones icon={"home"}        tipo={"btn-floating"} color={"grey darken-3"} dameresultado={""} />       </div>
                    <div className="fixed-action-btn4 hide-on-med-and-up"><Botones icon={"play_arrow"}  tipo={"btn-floating"} color={"grey darken-3"} dameresultado={""} />       </div>
                    <div className="fixed-action-btn5 hide-on-med-and-up"><Botones icon={"add"}         tipo={"btn-floating"} color={"grey darken-3"} dameresultado={""} disabled />       </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        diasreducer: state.cuantosDias
    };
};

const mapDispatchToProps = dispatch => {
    return {
        nuevaconcha: (dia) => dispatch({ type: actionTypes.NUEVACONCHA, payloadDia: dia })

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);