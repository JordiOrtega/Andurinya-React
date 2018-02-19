import React from 'react';
import Botones from '../botones/botones';



const modal = (props) => {
    if (!props.modal.entra) {
      return null;
    }
    return (
      <div className={"Backdrop"} style={{opacity: 1, visibility: 'visible' }} onClick={props.onclose}>
        <div className="Modal">
          <div>
            <h6 className="center-align">{props.modal.title}</h6>
            <br />
            <small><p>{props.modal.secondarytext}</p></small>
          </div>
          <div className="right">
            <Botones icon={"thumb_up"} tipo={"btn-floating"} color={"accent-color"} dameresultado={props.onclose} />
          </div>
        </div>
      </div>
      );
}

export default modal;