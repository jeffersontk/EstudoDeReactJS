import React from "react";

const Eventos = () => {
  function handleClick(event) {
    alert("Comprou: " + event.target.innerText);
  }

  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
    </div>
  );
};

export default Eventos;
