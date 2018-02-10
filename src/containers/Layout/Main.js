import React from 'react';
import Inicia from './../Inicia';
import { BrowserRouter } from 'react-router-dom';

const main = (props) => (
    <main>
        <div className="row">
            <div className="col-sm-1"></div>
            
                <div className="col-sm-10 crece">
                <BrowserRouter>
                    <Inicia />
                </BrowserRouter>    
                </div>
            <div className="col-sm-1"></div>
        </div>
    </main>
);

export default main;