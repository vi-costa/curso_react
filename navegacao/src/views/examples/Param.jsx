
import React from 'react'
import { useParams } from 'react-router-dom'

const Param = props => {
   const  {id} = useParams()

    return (
    <div className = "Param">
        <h2>Param</h2>
        <p>Valor: {id}!</p>
    </div>
    )
    }

export default Param
