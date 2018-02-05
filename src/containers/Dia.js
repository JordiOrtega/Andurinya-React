import React, { Component } from 'react';
import Pruebas from './Pruebas';
import Total from './Total';
import Mejillon from '../components/dia/Mejillon';
import $ from 'jquery';

class Dia extends Component {
    state = {
        cuantosnum: [], // array usado para añadir pruebas  
        valueinput: [], // contiene cantidad de mejillones en cada concha.
        mejillonpulsado: false
    }

    componentDidMount (){ 
        // se esconde el último día generado para obtener los resultados sino se hace scroll al footer.
        this.props.pulsado ? $('#dia:last-child').hide() : $('html,body').animate({scrollTop: $("footer").offset().top},'slow');
        
        if(!this.state.mejillonpulsado){
            this.props.habemusintentus(false); // si no está pulsada la img del mejillon, no hay intentos
        } 
    }

    nuevo = (texto) => {
        this.setState({mejillonpulsado: true});
        if(!this.props.pulsado){
            if (this.props.index + 1 >= this.props.cuantosdias){
                var arr = [...this.state.cuantosnum];
                arr.push(texto);
                this.setState({cuantosnum: arr})
                this.props.habemusintentus(true); //si hay intentos
                if($("#footer #image").length === 0){
                    var clonamejillon = $('#image').clone();
                    $(clonamejillon).prependTo('#footer');
                }
            }else {
                alert("Ya no puedes añadir más intentos.\nSigue evaluando con el siguiente día.");
                this.props.habemusintentus(false);
            }
        }else{
            alert("Ya dispones del resultado.\nRefresca la página para volver a empezar.");
            this.props.habemusintentus(false);
        }
    }
    eliminarUno = (i) => {
        var arr = this.state.cuantosnum;
        arr.splice(i, 1);
        var arr2 = this.state.valueinput;
        arr2.splice(i, 1);
        this.setState({cuantosnum: arr, valueinput: arr2});
    }
    cadaIntento = (texto, i) => {
           
            return (
                    <Pruebas key={i} index={i} eliminando={this.eliminarUno} 
                             valueinput={this.state.valueinput} 
                             devuelveresult = {(valueinput) => this.setState({valueinput})} >
                                {texto}{i+1}
                    </Pruebas>
                    );
    }

    render() {
        return (
            <div id="dia" className="row">
                <div className="col s1">
                </div>
                <div id={"dia" + this.props.cuantosdias} className="col s10 light-blue lighten-5 z-depth-2">

                    <blockquote>  <p className="flow-text">{this.props.children}  Pulsa el mejillón para añadir intentos:</p> </blockquote>
                    <div className="row">
                        <div className="col s4 m1">

                            <Mejillon nuevo={this.nuevo} />
                            { /* <img src='images/mejillon.svg' id='image' height='52' width='52' onClick={() => this.nuevo("Concha número: ")} /> */}
                        </div>
                        <div className="col s8 m11 left-align">
                            <Total intentos={this.state.valueinput.length} valueinput={this.state.valueinput}  // se modifica intentos={this.state.cuantosnum.length}
                                cuantosdias={this.props.cuantosdias} nuevoresultado={this.props.nuevoResultado}
                                pulsado={this.props.pulsado}
                            />
                        </div>
                    </div>
                    {this.state.cuantosnum.map(this.cadaIntento)}

                </div>
                <div className="col s1">
                </div>
            </div>

        );
    }
}

export default Dia;