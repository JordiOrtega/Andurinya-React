import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { Affix, Button } from 'antd';

import * as actionTypes from './../../store/actions'
import Mejillon from './../../components/dia/Mejillon'
import Botones from './../../components/botones/botones'


class Footer extends Component {
    up = () => {
        window.scrollTo(0,0);
    }
    render() {
        //let hayIntentos =  this.props.cuantosnum.filter(deundia => deundia.dia === this.props.diasreducer.length).length;
        return (
            <footer className="center-align page-footer white" id="footer">
            <div className="footer">&nbsp;</div>
                    <div className="arriba">           
                        <Botones 
                            icon={"expand_less"} 
                            tipo={"btn-floating"} 
                            color={"accent-color"} 
                            dameresultado={this.up} 
                        />  
                    </div>
                    <div className="mejillonnav">      
                        <Mejillon 
                            clicked={
                                        () => (this.props.diasreducer.slice(-1).pop() !== "FIN" ) ? 
                                            this.props.nuevaconcha(this.props.diasreducer.length) : 
                                            null 
                                    }
                        />
                    </div>
                    <div className="fixed-action-btn3">
                        <Link to="/">
                            <Botones 
                                icon={"home"}
                                tipo={"btn-floating"} 
                                color={"accent-color"} 
                            />
                        </Link>       
                    </div>
                    <div className="fixed-action-btn4">
                        <Link to="/resultado" onClick={() => this.props.disabled ? null : this.props.nuevoDia("FIN")}>
                            <Botones 
                                icon={"play_arrow"}  
                                tipo={"btn-floating"} 
                                color={"accent-color"} 
                            />       
                        </Link>
                    </div>
                    <div className="fixed-action-btn5">
                        <Botones 
                            icon={"add"}         
                            tipo={"btn-floating"} 
                            color={"accent-color"}
                            disabled={this.props.disabled ? true: false} 
                            dameresultado={() =>  this.props.nuevoDia("Día: ")}
                        /> 
                    </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        diasreducer: state.cuantosDias,
        //cuantosnum: state.cuantosNum
    };
};

const mapDispatchToProps = dispatch => {
    return {
        nuevaconcha: (dia)      => dispatch({ type: actionTypes.NUEVACONCHA, payloadDia: dia }),
        //nuevodia:    (texto)    => dispatch({ type: actionTypes.NUEVODIA, payloadTexto: texto  })

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);