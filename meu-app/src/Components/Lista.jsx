//atalho rafce
import React from "react";

const produtos = ["Notebook", "SmartPhone", "Tablet"];

const filmes = ["Lobo de wallstreet", "Vingadores Ultimato", "Poderoso chefão"];
const livros = [
  { nome: "A Clash of Kings", ano: 1996 },
  { nome: "A gema of Thrones", ano: 1999 },
  { nome: "A storm of Swords", ano: 2000 }
];

const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

const Lista = () => {
  return (
    <div>
      <p>{produtos}</p>
      {produtos.map(item => (
        <li key={item}>{item}</li>
      ))}
      <ul>{empresas}</ul>
      <ul>
        {filmes.map(filme => (
          <li key={filme}>{filme}</li>
        ))}
      </ul>
      <ul>
        {livros
          .filter(livro => livro.ano > 1998)
          .map(livro => (
            <li key={livro.nome}>
              {livro.nome} | {livro.ano}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Lista;
