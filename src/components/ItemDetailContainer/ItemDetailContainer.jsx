import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardItem from "../CardItem/CardItem";
import CardItemDetail from "../CardItemDetail/CardItemDetail";
import db from "../../../db/firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  //  Acceder al valor del parametro de la ruta del navegador
  const { id } = useParams();

  const [producto, setProducto] = useState({});

  // referencia a la bd de firebase
  const itemsRef = collection(db, "items");

  // Funcion Para consumir API con Async Await + Axios
  const getProducto = async () => {
    const productosCollection = await getDocs(itemsRef);
    const productosList = productosCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    const producto = productosList.find((producto) => producto.id == id);

    setProducto(producto);
  };

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <div>
      <CardItemDetail producto={producto}></CardItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
