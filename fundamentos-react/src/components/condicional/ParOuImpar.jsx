import React from 'react'

export default props => { 
    const isPar = props.numero % 2 === 0
    return (
        <div> {props.numero} é {""}
            {   
                isPar ? <span>um número par!</span> : 
                <span>um número impar!</span>
            }
        </div>
           )
}