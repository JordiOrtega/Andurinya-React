import React, { Component } from 'react';
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
        //jquery
            $('.esconde').show(); // muestra los resultados
            let buttons = [".btn"];
                buttons.forEach((boton) => { $(boton).prop("disabled", true); }); // desactiva botones
            let links = [".btn-floating"]
                links.forEach((link) => { $(link).addClass("no-activo") }); // desactiva links
            console.log(this.state.habemusintentus);
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
                    <div className="col s5 center-align"><button onClick={() => this.nuevoDia("Día: ")} className="waves-effect waves-light btn ">Nuevo día</button></div>
                    <div className="col s1"></div>
                    <div className="col s5 center-align"><button onClick={() => this.muestraResultado()} className="waves-effect waves-light btn ">Resultado</button></div>
                    <div className="col s1"></div>
                </div>
                <div className="row esconde">
                    <div className="container"><br />
                        <EndResult endResult={this.state.endResult} />
                    </div>
                </div>
                {this.state.cuantosdias.map(this.anadeDia)}
            </div>

        );
    }
}

export default Inicia;