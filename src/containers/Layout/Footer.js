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
            <div className="footer">&nbsp;</div>
                    <div className="arriba">           <Botones icon={"expand_less"} tipo={"btn-floating"} color={"accent-color"} dameresultado={this.up} />  </div>
                    <div className="mejillonnav">      <Mejillon clicked={() => this.props.nuevaconcha(this.props.diasreducer.length)} /></div>
                    <div className="fixed-action-btn3"><Botones icon={"home"}        tipo={"btn-floating"} color={"accent-color"} dameresultado={""} />       </div>
                    <div className="fixed-action-btn4"><Botones icon={"play_arrow"}  tipo={"btn-floating"} color={"accent-color"} dameresultado={""} />       </div>
                    <div className="fixed-action-btn5"><Botones icon={"add"}         tipo={"btn-floating"} color={"accent-color"} dameresultado={() => this.props.nuevodia("Día: ")}  /> </div>
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
        nuevaconcha: (dia)      => dispatch({ type: actionTypes.NUEVACONCHA, payloadDia: dia }),
        nuevodia:    (texto)    => dispatch({ type: actionTypes.NUEVODIA, payloadTexto: texto  })

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);