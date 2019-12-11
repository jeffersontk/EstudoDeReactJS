import React from "react";

const Atributos = () => {
  const abre = 8;
  const agora = new Date().getHours();
  const estilo = {
    color: "blue",
    fontSize: "20px",
    fontFamily: "Helvetica"
  };

  return (
    <div>
      <h1 style={estilo}>Empresa</h1>
      <form className="container">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
      </form>
      <p className={agora > abre ? "aberto" : "fechado"}>Funcionamento</p>
    </div>
  );
};

export default Atributos;
