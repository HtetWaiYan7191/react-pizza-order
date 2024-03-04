/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteCart,
  increaseQuantity,
  decreaseQuantity,
  getCurrentQuantity,
} from "../../redux/cart/cartSlice";
import CartQuantiesUpdate from '../../ui/CartQuantiesUpdate';

export default function MenuItem({ pizza }) {
  const { id: pizzaId, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantity(pizzaId));
  const isInCart = quantity > 0;

  const handleClick = () => {
    if (isInCart) {
      dispatch(deleteCart(pizza.id));
    } else {
      dispatch(addToCart({ ...pizza, pizzaId: pizza.id, quantity: 1, totalPrice: unitPrice * 1 }));
    }
  };

  return (
    <li
      className={`flex pb-2 mb-2 border-b-2 first:mt-6 pizza-item ${
        soldOut && "grow"
      }`}
    >
      <img
        src={imageUrl}
        alt="name"
        className={`object-cover w-32 ${soldOut && "grayscale opacity-70"}`}
      />
      <div className="flex flex-col ms-4">
        <div className="">
          <p
            className={`text-lg font-semibold ${
              soldOut && "grayscale font-normal"
            }`}
          >
            {name}
          </p>
          <p className="text-stone-500">{ingredients.join(",")}</p>
        </div>
        <div className="mt-auto ">
          <p className="text-stone-600">
            {!soldOut ? "$" + unitPrice.toFixed(2) : "Sold Out"}
          </p>
        </div>
      </div>
      <div className="mt-auto ml-auto btn-container">
        {isInCart && !soldOut && (
         <CartQuantiesUpdate id={pizzaId}/>
        )}
        {!soldOut && (
          <button
            onClick={handleClick}
            className="px-4 py-2 tracking-widest bg-yellow-500 rounded-full ms-6"
          >
            {isInCart ? "DELETE" : "ADD TO CART"}
          </button>
        )}
      </div>
    </li>
  );
}

/* eslint-enable no-unused-vars */
/* eslint-enable react/prop-types */
