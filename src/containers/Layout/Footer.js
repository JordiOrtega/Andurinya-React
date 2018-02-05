import React from 'react';

const footer = (props) => (
    <footer className="center-align page-footer white">
        <nav>
            <div className="nav-wrapper grey lighten-1 center-align">
                <div>
                    <a href="#!" className="breadcrumb">Día 1</a>
                    <a href="#!" className="breadcrumb">Día 2</a>
                    <a href="#!" className="breadcrumb">Día 3</a>
                </div>
            </div>
        </nav>
        <div className="row row--arriba grey darken-3">
            <a  className="left white-text valign-wrapper" href="#"><i className="material-icons">expand_less</i> </a>
            <p className="white-text"> {props.text} <i className="material-icons red-text md-18">favorite</i></p>
            
            <div className="fixed-action-btn" id="footer">
                <a className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                </a>
                <ul>
                    <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                    <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                    <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                    <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
                </ul>
            </div>
        </div>
        
    </footer>
);

export default footer;