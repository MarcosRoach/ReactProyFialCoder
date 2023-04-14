import "./App.css";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { useEffect, useState } from "react";
import db from "../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Bienvenida from "./components/Bienvenida/Bienvenida";
import Contacto from "./components/Contacto/Contacto";
import Cart from "./components/Cart/Cart";

function App() {
  const [productos, setProductos] = useState([]);

  //Referencia a la coleccion de productos
  const productosRef = collection(db, "items");

  // Funcion Para consumir Firebase con Async Await
  const getProductos = async () => {
    const productosCollection = await getDocs(productosRef);
    const productosList = productosCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setProductos(productosList);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Container>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="home" />}></Route>
        <Route
          path="/home"
          element={<Bienvenida saludo={"Bienvenidos a la Tienda "} />}
        ></Route>
        <Route
          path="/shop"
          element={<ItemListContainer productos={productos} />}
        ></Route>
        <Route path="/shop/:id" element={<ItemDetailContainer />}></Route>
        <Route
          path="/shop/categoria/:categoria"
          element={<ItemListContainer productos={productos} />}
        ></Route>
        <Route path="/contact" element={<Contacto />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
