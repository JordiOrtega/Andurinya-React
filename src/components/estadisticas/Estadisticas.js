import React, { Component } from 'react';
import axios from './../../firebase';

import { Table } from 'antd';

class Estadisticas extends Component {

    state = {
        estadisticas: []
    }
    
     componentDidMount() {
        axios.get('https://andurinya-95963.firebaseio.com/results.json')
        .then(response => {
            const data = Object.keys(response.data).map(key => response.data[key]);
            this.setState({estadisticas: data});
            
        })
    }
    
    render () {
        
        const columns = [{
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha',
          }, {
            title: '# Justos',
            dataIndex: 'justo',
            key: 'justo',
          }, {
            title: '# Suerte',
            dataIndex: 'suerte',
            key: 'suerte',
          },
          {
            title: '# Timo',
            dataIndex: 'timo',
            key: 'timo',
          }];
          console.log("[fecha]: " + this.state.estadisticas);
        return(
           
           <div className = "row"> 
                <h4 className="center">Estadísticas</h4>
                <Table dataSource={this.state.estadisticas} columns={columns} size="small"  />
                <div className = "row center-align"> 
                    <button onClick={() => this.props.history.replace('/')} className="waves-effect waves-light btn ">Volver</button>
                </div>
            </div>

        );
    }
}
   
export default Estadisticas;