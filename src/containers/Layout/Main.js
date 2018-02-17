import React from 'react';
import Inicia from './../Inicia';
import { Switch, Route } from 'react-router-dom';
import EndResult from '../EndResult';
import Estadisticas from './../../components/estadisticas/Estadisticas';

const main = (props) => (
    <main>
        <div className="row">
            <div className="col-sm-1"></div>
            
                <div className="col-sm-10 crece">
                    <Switch>
                        <Route path="/" exact component={Inicia} />    
                        <Route path="/resultado" component={EndResult}/>
                        <Route path="/estadisticas" component={Estadisticas} />
                     </Switch>
                </div>
            <div className="col-sm-1"></div>
        </div>
    </main>
);

export default main;