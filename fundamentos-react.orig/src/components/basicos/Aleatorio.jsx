


import React from 'react'

    
export default (props) =>{
    
    const max = 2
    const min = 10

    return (
        <React.Fragment>
         
            <h2>Número Inteiro Aleatório entre {max} e {min}:</h2>
            <p> {'>>>>>'} <strong> {parseInt(Math.random() * (max - min) + min)} </strong> {'<<<<<'} </p>
        
        </React.Fragment>
    );

};