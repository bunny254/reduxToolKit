import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const ProductsListing = () => {
  const dispatch = useDispatch();
  const [products, getProducts] = useState([]);
  useEffect(() => {
    //api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  //add to cart Functionality
  const addToCart = (product) => {
    //dispatch cart action
    dispatch(add(product));
  };
  return (
    <div className="grid">
      <div className="grid grid-cols-12">
        {products.map((product) => (
          <div className="col-span-3 mt-3 mb-3" key={product.id}>
            <div className="flex justify-center">
              <img
                src={product.image}
                className="w-[150px] h-[150px]"
                alt="Nothin"
              />
            </div>
            <div className="flex justify-center">
              <h1 className="font-bold text-center">{product.title}</h1>
            </div>
            <div className="flex justify-center">
              <p>{product.price}</p>
            </div>
            <div className="mb-4 flex justify-center">
              <button
                className="bg-red-500 rounded p-1"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsListing;
