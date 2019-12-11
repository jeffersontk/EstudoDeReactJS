import React, { useState, useEffect } from "react";
import ProdutosLista from "./ProdutosLista";

const Props = () => {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/wp-json/api/produto?_limit=9")
      .then(response => response.json())
      .then(json => setProdutos(json));
  }, []);
  return (
    <div>
      <h1>Produtos</h1>
      <ProdutosLista produtos={produtos} />
    </div>
  );
};

export default Props;
