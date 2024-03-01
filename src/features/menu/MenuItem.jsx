/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

export default function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className="flex pb-2 mb-2 border-b-2 first:mt-6 pizza-item">
      <img src={imageUrl} alt="name" className="object-cover w-32" />
      <div className="flex flex-col ms-4">
        <div className="">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-stone-500">{ingredients.join(",")}</p>
        </div>
        <div className="mt-auto ">
          <p className="text-stone-600">{!soldOut ? '$'+unitPrice.toFixed(2) : "Sold Out"}</p>
        </div>
      </div>
      <div className="mt-auto ml-auto btn-container">
        <button className="px-4 py-2 tracking-widest bg-yellow-500 rounded-full">
          ADD TO CART
        </button>
      </div>
    </li>
  );
}

/* eslint-enable no-unused-vars */
/* eslint-enable react/prop-types */
