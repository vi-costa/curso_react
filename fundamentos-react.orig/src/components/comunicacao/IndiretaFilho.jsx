import React from "react";

export default (props) => {
  const onclick = props.quandoClicar;
  const gerarIdade = () => parseInt(Math.random() * 100 - 15) + 15;
  const gerarNerd = () => Math.random() > 0.5
  return (
    <div>
      <button
        onClick={function (e) {
          onclick("João", gerarIdade(), gerarNerd());
        }}
      >
        Fornecer informações
      </button>
    </div>
  );
};
