import { addDoc, collection } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import db from "../../db/firebase-config";
import { Navigate, useNavigate } from "react-router-dom";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // estado de Cart
  const [cart, setCart] = useState([]);
  const [cartNumero, setCartNumero] = useState();
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    setUsuario({});
  }, {});

  useEffect(() => {
    setCartNumero(0);
  }, []);

  // Funcion para agregar un producto al carrito
  function addItem(producto, cantidad) {
    let cartNumeroOld = cartNumero;
    if (isInCart(producto)) {
      agregateQuantity(producto, cantidad);
      setCartNumero(cartNumeroOld + cantidad);
    } else {
      addNew(producto, cantidad);
      setCartNumero(cartNumeroOld + cantidad);
    }
  }

  //existe el producto en el carrito
  function isInCart(producto) {
    const isInCart = cart.find((item) => item.id === producto.id);
    return isInCart;
  }

  // Funcion para agregar un nuevo producto al carrito
  function addNew(producto, cantidad) {
    setCart([...cart, { ...producto, quantity: cantidad }]);
  }

  // Funcion para agregar la cantidad de un producto ya existente en el carrito
  function agregateQuantity(producto, cantidad) {
    const newCart = cart.map((item) => {
      if (item.id === producto.id) {
        item.quantity += cantidad;
        return item;
      } else {
        return item;
      }
    });
    setCart(newCart);
  }

  // Funcion para eliminar un producto del carrito
  function removeItem(producto, cantidad) {
    let cartNumeroOld = cartNumero;
    const newCart = cart.filter((item) => item.id !== producto);
    setCart(newCart);
    setCartNumero(cartNumeroOld - cantidad);
  }

  // Funcion para vaciar el carrito
  function clear() {
    setCart([]);
    setCartNumero(0);
  }

  // Funcion para calcular el total del carrito
  function total() {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  }

  //Funcion para actualizar la cantidad de un producto
  function updateQuantity(producto, cantidad) {
    let cartNumeroOld = cartNumero;
    const newCart = cart.map((item) => {
      if (item.id === producto) {
        item.quantity += cantidad;
        return item;
      } else {
        return item;
      }
    });
    setCart(newCart);
    setCartNumero(cartNumeroOld + cantidad);
  }

  //Funcion patra finalizar la compra
  function finish(usuario) {
    addOrder(usuario);
  }

  //Referencia a la coleccion de productos
  const productosRef = collection(db, "ordenes");

  //Funcion para agregar orden a firebase
  const addOrder = async (usuario) => {
    const orden = {
      comprador: usuario,
      items: cart,
      total: total(),
      fecha: new Date(),
    };

    await addDoc(productosRef, orden);
    clear();
    <Navigate to="/shop" replace={true} />;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        cartNumero,
        removeItem,
        updateQuantity,
        clear,
        total,
        finish,
        setUsuario,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
