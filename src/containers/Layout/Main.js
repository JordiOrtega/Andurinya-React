import React from 'react';
import Inicia from './../Inicia';
import { Switch, Route } from 'react-router-dom';
import EndResult from '../EndResult';
import Estadisticas from './../../components/estadisticas/Estadisticas';

const main = (props) => (
    <main>
        <div className="row">
            <Switch>
                <Route path="/" exact component={Inicia} />    
                <Route path="/resultado" component={EndResult}/>
                <Route path="/estadisticas" component={Estadisticas} />
            </Switch>
        </div>
    </main>
);

export default main;