import React, { Component } from 'react';
import Resultado    from './../components/pruebas/Resultado';
import Ponmejis     from './../components/pruebas/Ponmejis';
import Contador     from './../components/pruebas/Contador';
import Restamejis   from './../components/pruebas/Restamejis';
import Quitamejis   from './../components/pruebas/Quitamejis'; 
import $ from 'jquery';


class Pruebas extends Component {

    state = {
        editando: false
    }

    componentDidMount (){ // añade un elemento al array valueinput con el valor de mejillones (por defecto siempre 1)
        var arr = [...this.props.valueinput];
        arr.push(1);
        this.props.devuelveresult(arr);
        $('html,body').animate({scrollTop: $("footer").offset().top},'slow');
    }
    sumar = () => {  //Botón suma
        var arr = [...this.props.valueinput];
        var contenidoI = arr[this.props.index];
        arr[this.props.index] = contenidoI + 1;
        this.props.devuelveresult(arr);
    }
    restar = () => {  //Botón resta
        var arr = [...this.props.valueinput];
        var contenidoI = arr[this.props.index];
        if (contenidoI > 0){
            arr[this.props.index] = contenidoI - 1;
            this.props.devuelveresult(arr);
        }
    }
    quitar = () => { //Confirmación para borrar.
        this.setState({editando: true});
    }
    cancelar = () => {
        this.setState({editando: false});
    }
    eliminar = () => { // Borra del array
        this.props.eliminando(this.props.index);
        this.setState({editando: false});
        //Materialize.toast('¡Eliminada!', 4000);
    }

    renderNormal () {
        return (
            
                <div id="conchas" className="col s12 m6 l4 xl3">
                    <div className="card-panel hoverable grey lighten-4">   
                        <div className="commentText inline">{this.props.children} </div> 
                        <div className="right">
                            <Resultado valueInput = {this.props.valueinput[this.props.index]} />
                        </div> 
                        <br />
                            <Ponmejis dameresultado = {this.sumar} />
                            <Contador valueInput = {this.props.valueinput[this.props.index]} />
                            <Restamejis dameresultado = {this.restar} />
                        <span> </span>
                            <Quitamejis dameresultado = {this.quitar} />
                    </div>
                </div>
                );
    }
    renderBorra () {
        return (
            <div className="col s12 m6 l4 xl3">
                    <div className="card-panel hoverable grey lighten-4">   
                <h6 className="regular"> ¿Estás seguro de eliminar</h6>
                <h6 className="regular"> la {this.props.children} ?</h6>
                <i className="material-icons red-text tooltipped" data-position="bottom" data-delay="50" data-tooltip="Eliminar" onClick={this.eliminar}>delete</i>
                <span className= "red-text left" onClick={this.eliminar}>Sí </span>
                <i className="material-icons green-text right" onClick={this.cancelar}>not_interested</i>
                <span className= "green-text right" onClick={this.cancelar}>Volver </span>
                
            </div></div>
                );
    }

    render() {
        return( this.state.editando ? this.renderBorra() : this.renderNormal() );
    }
}

export default Pruebas;