import React, { useEffect, useState } from 'react';
import "./Countries.css";
import Country from './country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags")
        .then(res =>res.json())
    .then(data => setCountries(data));
    }, []);
    return (
        <div className='countries'>
            {
            countries.map((country) =>(
                
            <Country key={country.name.common}
                country = {country}

           
            />

            ))}
            
            
        </div>
    );
};

export default Countries;