import React, { Component } from 'react';

import Resultado from './Resultado';
import Contador from './Contador';
import Botones from '../botones/botones';

class NuevaPrueba extends Component {

    componentDidMount() {
        this.focusConcha.scrollIntoView();
    }
    render(){
        return(

        <div className="col s12 m6 l4 xl3">
            <div className="card-panel hoverable light-primary-color" 
                    ref={(divdia) => { this.focusConcha = divdia }} >
                <div className="commentText inline">
                    {this.props.texto}
                    <Resultado valueInput={this.props.edita[this.props.posicion].mejillones} />
                </div>
                <Botones 
                    icon={"add"} 
                    tipo={"btn-floating"} 
                    color={"accent-color"} 
                    dameresultado={this.props.sumar}
                    disabled={this.props.desabilita()}/> 
                <Contador valueInput={this.props.edita[this.props.posicion].mejillones} />
                <Botones 
                    icon={"indeterminate_check_box"} 
                    tipo={"btn-floating"} 
                    color={"accent-color"} 
                    dameresultado={this.props.restar} 
                    disabled={this.props.desabilita()}/> 
                <Botones 
                    icon={"cancel"} 
                    tipo={"btn-floating"} 
                    color={"red"} 
                    dameresultado={() => this.props.editando(this.props.posicion)} 
                    disabled={this.props.desabilita()} />  
            </div>
        </div>
        );
    }
}


export default NuevaPrueba;