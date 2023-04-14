import React from "react";
import { Link } from "react-router-dom";

const Categorias = ({ categoria }) => {
  return (
    <Link to={`/shop/categoria/${categoria}`}>
      <div>{categoria}</div>
    </Link>
  );
};

export default Categorias;
