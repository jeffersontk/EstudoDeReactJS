import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Sobre from "./Pages/Sobre";
import Header from "./Components/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/sobre" component={Sobre} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
