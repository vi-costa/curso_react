import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'
export default props => {

    const [a,b] = [1,2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState('?')
    const [nerd, setNerd] = useState(false) 

    function fornecerInformacoes(nome, idade, nerd) { 
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    return (
        <div>
           <span>{"Nome: "}{nome}{", "}</span>
           <span>{"Idade: "}{idade}{", "}</span>
           <span>{"É um nerdola? " } 


           {nerd ?  'Verdadeiro' : 'Falso' }   </span>
           
           
            <IndiretaFilho
            quandoClicar = {fornecerInformacoes}
            ></IndiretaFilho>
        </div>
    )
}