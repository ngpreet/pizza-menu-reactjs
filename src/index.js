import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        imageUrl="./pizzas/margherita.jpg"
        price={10}
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.imageUrl} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  return <footer className="footer">We are currently open</footer>;
}

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
