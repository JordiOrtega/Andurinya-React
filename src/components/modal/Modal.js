import React  from 'react';
import Botones from '../botones/botones';

const modal = ({ modaltext, ...props }) => {

  const modaldata = require('./modal.json');
  const cssClasses = ['Modal', modaltext.isopen ? 'ModalOpen' : '']
  const cssClasses2 = ['Backdrop', modaltext.isopen ? 'BackdropOpen' : '']
  return (
    <div className={cssClasses2.join(' ')}  onClick={props.onclose}> 
      <div className={cssClasses.join(' ')}>
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