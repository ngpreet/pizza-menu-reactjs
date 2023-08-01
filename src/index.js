import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza pizzaObj={pizza} key={pizza.name} />;
        })}
      </ul>
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHours = 10;
  const closeHours = 22;
  const isOpen = hours >= openHours && hours <= closeHours;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open until {closeHours}:00. Come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
