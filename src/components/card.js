import React from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";

function card(product) {
  return (
    <div className="card" key={product.id}>
      <img src={product.image} alt="NOT FOUND IMG"></img>
      <h1>
        <Link to={`post/${product.id}`}>{product.title}</Link>
      </h1>
      {/* <p>{product.description}</p> */}
      <h2>${product.price}</h2>
    </div>
  );
}

export default card;
