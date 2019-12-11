import React, { useState } from "react";

const Sobre = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });
  function handleChange(event) {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    });
  }

  return (
    <div>
      <h1>Sobre</h1>
      <form action="">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          cols="30"
          rows="5"
          value={form.mensagem}
          onChange={handleChange}
        />
      </form>
      <ul>
        <li>nome: {form.nome}</li>
        <li>email: {form.email}</li>
        <li>mensagem: {form.mensagem}</li>
      </ul>
    </div>
  );
};

export default Sobre;
