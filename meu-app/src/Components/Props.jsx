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
      {produtos.length > 0 ? (
        <ProdutosLista produtos={produtos} />
      ) : (
        "Carregando..."
      )}
    </div>
  );
};

export default Props;
