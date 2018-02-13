import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Affix, Button } from 'antd';

import * as actionTypes from './../../store/actions'
import Mejillon from './../../components/dia/Mejillon'


class Footer extends Component {
    up = () => {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <footer className="center-align page-footer white" id="footer">

                {/* <div className="scrollable-container" ref={(node) => { this.container = node; }}>
                    <div className="background">
                        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                        <Affix target={() => this.container}>
                            <Button ghost>
                            {this.props.text}<i className="material-icons red-text md-18">favorite</i>
                            </Button>
                        </Affix>
                        </div>
                    </div>
                </div> */}
                    <div className="mejillonnav"><Mejillon clicked={() => this.props.nuevaconcha(this.props.diasreducer.length)} /></div>
                    <div className="arriba hide-on-med-and-up"><a onClick={()=> this.up()} className="white-text btn-floating grey darken-3"><i className="material-icons left">expand_less</i></a></div>
                    <div className="fixed-action-btn3 hide-on-med-and-up"><a href="" className="white-text btn-floating grey darken-3"><i className="material-icons left">home</i></a></div>
                    <div className="fixed-action-btn4 hide-on-med-and-up"><a href="" className="white-text btn-floating grey darken-3"><i className="material-icons left">play_arrow</i></a></div>
                    <div className="fixed-action-btn5 hide-on-med-and-up"><a href="" className="white-text btn-floating grey darken-3"><i className="material-icons left">add</i></a></div>

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