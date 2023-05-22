import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const ShoppingCart = () => {
  //Return total number of cart items
  const cartProducts = useSelector((state) => state.cart);
  
  const dispatch = useDispatch()
  const removeToCart = (id)=>{
    //dispatch remove item from cart action
    dispatch(remove(id));
  }

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-start-2">ShoppingCart</div>
        {cartProducts.map((product) => (
          <div className="mt-3 col-start-2 col-span-10 border-black border-b" key={product.id}>
            <div className="flex flex-row gap-4">
              <div className="h-20 w-10">
                <img src={product.image} alt="" />
              </div>
              <div>
                <p>{product.title}</p>
                <p className="mt-4">Price: {product.price}</p>
              </div>
              <div>
                <button onClick={()=>removeToCart(product.id)} className="bg-red-500 rounded px-4"><p className="text-2xl">-</p></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
