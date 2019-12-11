import React from "react";

const Home = () => {
  //chamando um codigo javascrip dentro do componente é entre {}
  const nav = (
    <nav>
      <ul>
        <li>
          <a href="#1">Google</a>
        </li>
      </ul>
    </nav>
  );
  const idade = 30;
  return (
    <section>
      <h1>Home</h1>
      {nav}
      {idade >= 18 ? "Pode dirigir" : "não pode digirir"}
    </section>
  );
};

export default Home;
