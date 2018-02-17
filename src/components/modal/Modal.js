import React, { Component } from 'react';
import $ from 'jquery';
import Botones from '../botones/botones';



class Modal extends Component {

  render() {

    if (!this.props.entra) {
      return null;
    }
    return (
      <div className={"Backdrop"} style={{opacity: 1, visibility: 'visible' }}onClick={this.props.onclose}>
        <div className="Modal">
          <div>
            <h6 className="center-align">{this.props.title}</h6>
            <br />
            <small><p>{this.props.secondarytext}</p></small>
          </div>
          <div className="right">
            <Botones icon={"thumb_up"} tipo={"btn-floating"} color={"accent-color"} dameresultado={this.props.onclose} />
          </div>
        </div>
      </div>
      );
  }
}

export default Modal;