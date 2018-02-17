import React from 'react';


const mejillon = (props) => (
        <div>
            
                <img src={require('./mejillon.svg')} id='image' height='52' width='52' alt='mejillon' onClick={() => props.clicked("Concha número: ")}/>
            
        </div>
);

export default mejillon;