import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Dia from './Dia';
import EndResult from './EndResult';
import $ from 'jquery';



class Inicia extends Component {
    state = {
        cuantosdias: [],
        endResult: [],
        pulsado: false,
        habemusintentus: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.cuantosdias.length > 0;
    }

    desactivalinks = () => {
        let links = [".btn-floating"];
        links.forEach((link) => { $(link).addClass("no-activo") }); 
    }

    nuevoResultado = (resultado) => {
        let arr = [...this.state.endResult];
        arr.push(resultado);
        this.setState({ endResult: arr });
    }

    nuevoDia = (texto) => {
        this.setState({ habemusintentus: false });
        if (this.state.habemusintentus || this.state.cuantosdias.length === 0) {
            let arr = this.state.cuantosdias;
            arr.push(texto);
            this.setState({ cuantosdias: arr });
        }   else { 
                if (texto !== 'FIN') {
                    alert("Para añadir otro día:\nTienes que añadir intentos."); 
                }
            }
    }
    anadeDia = (texto, i) => {
        this.desactivalinks(); //desactiva los de los días anteriores.
        return (
            <Dia 
                key={i}
                index={i}
                cuantosdias={this.state.cuantosdias.length}
                nuevoResultado={this.nuevoResultado}
                habemusintentus={(habemusintentus) => this.setState({ habemusintentus })}
                pulsado={this.state.pulsado} > 
                        {texto}{i + 1}
            </Dia>
        );
    }
    muestraResultado = () => {
            let buttons = [".btn"];
                buttons.forEach((boton) => { $(boton).prop("disabled", true); }); // desactiva botones
            this.desactivalinks(); //todos.
            if(!this.state.habemusintentus){ 
                $('#dia:last-child').hide();
        //end_jquery
            }else{
                this.nuevoDia("FIN");// para que tenga en cuenta el último día, genero otro día.
            }
        this.setState({ pulsado: true });
    }

    render() {
        
        return (
            <div>
                <div className="row section">
                    <div className="col s5 center-align">
                        <button onClick={() => this.nuevoDia("Día: ")} className="waves-effect waves-light btn ">Nuevo día</button>
                    </div>
                    <div className="col s1"></div>
                    <div className="col s5 center-align">
                    <Link to="/resultado">
                        <button onClick={() =>this.muestraResultado() } className="waves-effect waves-light btn ">Resultado</button>
                    </Link>
                    </div>
                    <div className="col s1"></div>
                </div>
                    <div className="row container"><br />
                        {/*  Thanks to omarjmh on https://github.com/ReactTraining/react-router/issues/4105 */}
                     <Route path="/resultado" exact component={() => <EndResult endResult={this.state.endResult} />} />    
                    </div>
                {this.state.cuantosdias.map(this.anadeDia)}
            </div>

        );
    }
}

export default Inicia;