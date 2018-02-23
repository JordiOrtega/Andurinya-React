import React, { Component } from 'react';
import Botones from '../botones/botones';

const modal = ( {modaltext, ...props}) => {
   
      const modaldata = require('./modal.json');
      if (!modaltext.isopen) {
        return null;
      }
      return (
          <div className={"Backdrop"} style={{opacity: 1, visibility: 'visible' }} onClick={props.onclose}>
            <div className="Modal">
              <div>
                <h6 className="center-align">{modaldata[modaltext.modaltext].title}</h6>
                <br />
                <small><p>{modaldata[modaltext.modaltext].secondarytext}</p></small>
              </div>
              <div className="right">
                <Botones icon={"thumb_up"} tipo={"btn-floating"} color={"accent-color"} dameresultado={props.onclose} />
              </div>
            </div>
          </div>
          );
}

export default modal;