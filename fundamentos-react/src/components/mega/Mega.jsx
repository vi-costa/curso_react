import React, {useState} from "react";

import './Mega.css'

export default (props) => {

    
  
    function gerarNumeroNaoContido(min,max,array) {
        const aleatorio = parseInt(Math.random()
        *(max-min) + min)
        return array.includes(aleatorio) ? 
        gerarNumeroNaoContido(min, max,array) : 
        aleatorio
      }
      
  function gerarNumeros(qntd) {
    const numeros = Array(qntd)
      .fill(0)
      .reduce((nums) => {
        //reduce reune os itens
        //de um array em um objeto final

        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2); //organizar na ordem crescente
    return numeros;
  }

  const [qntd, setQntd] = useState(props.qntd || 6);
  const numerosIniciais = gerarNumeros(qntd);
  const [numeros, setNumeros] = useState(numerosIniciais);


  return (
    <div className = "Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label> Qntd de números </label>
        <input
          type="number"
          vaue={qntd}
          onChange={(e) => 
            
          {setQntd(+e.target.value)
                setNumeros(gerarNumeros(+e.target.value))
                            } 
        }
        ></input>
        <button onClick={(_) => setNumeros(gerarNumeros(qntd))}>
        
          Gerar Números
        </button>
      </div>
    </div>
  );
};
