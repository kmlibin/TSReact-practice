import React from "react";
import AppStateProvider from './AppState'

//data
import pizzas from "../data/pizzas.json";

//components
import Pizza from "./Pizza";
import Cart from "./Cart";

//styles
import AppCSS from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";


const App = () => {
  return (

    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <PizzaSVG width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>

  );
};

export default App;
