import React from "react";
import {AiOutlineShopping} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartProducts = useSelector(state => state.cart);
  return (
    <nav>
      <nav className="hidden xl:grid">
        <nav className="grid grid-cols-12 mt-6">
          <div className="col-start-2 col-span-3">
            <Link to="/">
            <h1 className="font-bold">Redux Mastery</h1>
            </Link>
          </div>
          <div className="col-start-12 col-span-2">
            <Link to='/cart'>
            <div className="flex flex-col cursor-pointer">
              <AiOutlineShopping size="28px" />
              <div className="absolute mt-3 ml-5 rounded-full h-5 w-5 bg-red-500">
                <p className="ml-[28%] text-white text-sm">{cartProducts.length}</p>
              </div>
              <p>Ksh 0.00</p>
            </div>
            </Link>
          </div>
        </nav>
      </nav>
    </nav>
  );
};

export default NavBar;
