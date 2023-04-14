import React from 'react';
import './Country.css';
const Country = (props) => {
    const country = props.country;
    console.log(country.population);
    return (
        <div className='country'>
            <h1>Country name:{country.name.common}</h1>
            <p>Population: {country.population}</p>
        </div>
    );
};

export default Country;