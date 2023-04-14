import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";

// Fuente Roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CartProvider>
      <BrowserRouter>
        {/* Reiniciar Estilos Bases */}
        <CssBaseline />
        {/* Reiniciar Estilos Bases */}

        <App />
      </BrowserRouter>
    </CartProvider>

    <Footer />
  </>
);
