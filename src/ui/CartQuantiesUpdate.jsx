/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  getCurrentQuantity,
} from "../redux/cart/cartSlice";
export default function CartQuantiesUpdate({ id }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getCurrentQuantity(id));
  return (
    <>
      <button
        onClick={() => dispatch(decreaseQuantity(id))}
        className="w-8 h-8 bg-yellow-500 rounded-full me-3"
      >
        -
      </button>
      <span className="me-3">{quantity}</span>
      <button
        onClick={() => dispatch(increaseQuantity(id))}
        className="w-8 h-8 bg-yellow-500 rounded-full me-3"
      >
        +
      </button>
    </>
  );
}
