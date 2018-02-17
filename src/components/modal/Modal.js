import React from 'react';
import Botones from '../botones/botones';



const modal = (props) => {
    if (!props.entra) {
      return null;
    }
    return (
      <div className={"Backdrop"} style={{opacity: 1, visibility: 'visible' }}onClick={props.onclose}>
        <div className="Modal">
          <div>
            <h6 className="center-align">{props.title}</h6>
            <br />
            <small><p>{props.secondarytext}</p></small>
          </div>
          <div className="right">
            <Botones icon={"thumb_up"} tipo={"btn-floating"} color={"accent-color"} dameresultado={props.onclose} />
          </div>
        </div>
      </div>
      );
}

export default modal;