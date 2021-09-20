import React from 'react';
import './Country.css'
const Country = (props) => {
    const{name, capital, population, flag} = props.country;
    return (
        <div className='country'>
            <h1>name:{name}</h1>
            <h2>capital:{capital}</h2>
            <h4>population:{population}</h4>
            <img style={{width:'200px'}} src={flag} alt=""/>
        </div>
    );
};

export default Country;