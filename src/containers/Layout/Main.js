import React from 'react';
import Inicia from './../Inicia';

const main = (props) => (
    <main>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 crece">
                <Inicia />
            </div>
            <div className="col-sm-1"></div>
        </div>
    </main>
);

export default main;