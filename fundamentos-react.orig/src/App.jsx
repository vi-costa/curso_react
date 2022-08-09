import "./App.css";
import React from "react";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>


    <div className="Cards">
      
      <Card titulo="#13 - Megasena" color="purple">
        <Mega qntd = {8}></Mega>
      </Card>

      <Card titulo="#12 - Contador" color="silver">
        <Contador numeroInicial={2}></Contador>
      </Card>

      <Card titulo="#11 - Componente Controlado" color="darkred">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="darkgreen">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="grey">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="brown">
        <ParOuImpar
          numero={parseInt(Math.random() * (100 - 1) + 1)}
        ></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
        <UsuarioInfo usuario={{ doninha: "aquatica" }}></UsuarioInfo>
      </Card>

      <Card titulo="#07 - Exercício Repetição" color="#08a1d4">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#a0e305">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="purple">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="green">
        <Aleatorio></Aleatorio>
      </Card>

      <Card titulo="#03 - Fragmento" color="pink">
        <Fragmento></Fragmento>
      </Card>

      <Card titulo="#02 - Segundo Componente" color="orange">
        <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.5} />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="blue">
        <Primeiro />
      </Card>
    </div>
  </div>
);
