// Importar React y ReactDOM
import React from "react";
import ReactDOM from "react-dom/client"

// include your styles into the webpack bundle
import Home from "./component/home"

//import your own components
import "../styles/index.css"

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);
