import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return <h1>Hello React!</h1>
}

const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);