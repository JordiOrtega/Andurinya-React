import React, { Component } from 'react';
import Dia from './Dia';
import EndResult from './EndResult';
import $ from 'jquery';

class Inicia extends Component {
    state = {
        cuantosdias: [],
        endResult: [],
        pulsado: true,
        habemusintentus: false
    }

    shouldComponentUpdate (nextProps, nextState){
        return this.state.cuantosdias.length > 0;
    }

    nuevoResultado = (resultado) => {
        var arr =[...this.state.endResult];
        arr.push(resultado);
        this.setState({endResult: arr});
    }

    nuevoDia = (texto, paralo) => {
        if(paralo || this.state.habemusintentus){
            if (this.state.habemusintentus || this.state.cuantosdias.length == 0){
                var arr = this.state.cuantosdias;
                arr.push(texto);
                this.setState({cuantosdias: arr});
        }else {alert("Para añadir otro día:\nTienes que añadir intentos.");}
        }
    }
    anadeDia = (texto, i) => {
        return (
            <Dia key={i} index={i} cuantosdias={this.state.cuantosdias.length} 
                    nuevoResultado={this.nuevoResultado}
                    habemusintentus = {(habemusintentus) => this.setState({habemusintentus})}
                    pulsado={this.state.pulsado} >
                
                {texto}{i+1}
            
            </Dia>
            );
    }
    muestraResultado = () => {  
        //jquery
            $('.esconde').show(); // muestra los resultados
            var buttons = [".btn"];
            buttons.forEach( (boton)=> {$(boton).prop("disabled",true);}); // desactiva botones
            var links = [".btn-floating"]
            links.forEach ( (link) => {$(link).addClass("no-activo")}); // desactiva links
        //end_jquery

        var ispulsado = !this.state.pulsado;
        this.setState({ pulsado: ispulsado });
        this.nuevoDia("FIN", ispulsado);// para que tenga en cuenta el último día, genero otro día.
    }
    
    render() {
      return (
        <div>
            <div className="row section">
                <div className="col s5 center-align"><button onClick = { () => this.nuevoDia("Día: ", true) } className="waves-effect waves-light btn ">Nuevo día</button></div>
                <div className="col s1"></div>
                <div className="col s5 center-align"><button onClick = { () => this.muestraResultado()} className="waves-effect waves-light btn ">Resultado</button></div>
                <div className="col s1"></div>
            </div>
            <div className="row esconde">
                <div className="container"><br />
                    <EndResult endResult ={this.state.endResult} />
                </div>
            </div>
            {this.state.cuantosdias.map(this.anadeDia)}
        </div>

     );
    }
} 

export default Inicia;