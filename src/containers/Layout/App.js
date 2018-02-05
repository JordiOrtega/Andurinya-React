import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


class App extends Component {
    render() {
      return (
        <div>   
            <Header title={"Anduriña nos persigue"} />
            <Main />
            <Footer text={"By Jordi with"} />
        </div>  
     );
    }
} 

export default App;