import React from "react";
import { useParams } from "../../node_modules/react-router-dom/dist/index";
import ProductsDB from "../components/ProductsDB";
function Post() {
  const { id } = useParams(); //String ID
  const currentId = parseInt(id, 10); //integer ID
  const localProduct = ProductsDB.find((product) => product.id === currentId);
  return (
    <>
      <div className="post">
        <img src={localProduct.image} alt="NOT FOUND IMG"></img>
        <div className="post-text">
          <h1>{localProduct.title}</h1>
          <p>{localProduct.description}</p>
          <h2>${localProduct.price}</h2>
        </div>
      </div>
    </>
  );
}

export default Post;
