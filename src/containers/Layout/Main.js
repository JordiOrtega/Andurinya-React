import React from 'react';
import Inicia from './../Inicia';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EndResult from '../EndResult';
import Estadisticas from './../../components/estadisticas/Estadisticas';

const main = (props) => (
    <main>
        <div className="row">
            <div className="col-sm-1"></div>
            
                <div className="col-sm-10 crece">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Inicia} />    
                        <Route path="/resultado" component={EndResult}/>
                        <Route path="/estadisticas" component={Estadisticas} />
                        {/* component={() => <EndResult endResult={this.state.endResult} />}  */}
                     </Switch>
                    {/* <Inicia /> */}
                </BrowserRouter>    
                </div>
            <div className="col-sm-1"></div>
        </div>
    </main>
);

export default main;