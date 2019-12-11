import React, { useState, useEffect } from "react";

const FetchEuseEffect = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/wp-json/api/produto?_limit=9")
      .then(response => response.json())
      .then(json => setProdutos(json));
  }, []);

  return (
    <div>
      {produtos.map(produto => (
        <div key={produto.id}>
          <h1>{produto.nome}</h1>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
        </div>
      ))}
    </div>
  );
};

export default FetchEuseEffect;
