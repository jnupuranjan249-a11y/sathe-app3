import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, flags} = props.country;
    
    return (
        <div>
            
             <h1>{name.common}</h1>
             <h4>{capital}</h4>
             <img src={flags.png} alt="" />

             
         </div>
    );
};

export default Country;