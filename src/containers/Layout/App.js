import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


const app = (props) => {
    return (
    <div className="allvh">   
            <Header title={"Anduriña nos persigue"} />
            <Main />
            <Footer text={"By Jordi with"} />
    </div>  
    );
} 

export default app;