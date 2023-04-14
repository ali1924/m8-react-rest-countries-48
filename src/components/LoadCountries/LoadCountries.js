import React, { useEffect, useState } from 'react';
import './LoadCountries.css';
import Country from '../Country/Country';
const LoadCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    console.log(countries);
    return (
        <div>
            <h1>Visiting every country in the world...!!</h1>
            <h3>Available countries :{countries.length}</h3>
            {
                countries.map(country => <Country
                country={country}
                ></Country>)
            }
        </div>
    )
};

export default LoadCountries;