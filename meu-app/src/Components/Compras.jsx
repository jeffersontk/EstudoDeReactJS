import React from "react";

const Compras = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <p>Total: {count}</p>
      <p>Preço: R$ {count * 250}</p>
    </div>
  );
};

export default Compras;
