import React from 'react';
import './Country.css';
const Country = (props) => {
    const country = props.country;
    console.log(country);
    const { region ,area,name} = country;
    return (
        <div className='country'>
            <div className='country-info'>
                <p>Country name:{name.common}</p>
                <p>Population: {country.population}</p>
                <p>Region: {region}</p>
                <p>Area: {area}</p>
            </div>
            <img src={country.flags.png} alt="" />
        </div>
    );
};

export default Country;