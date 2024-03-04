/* eslint-disable react/prop-types */
import { clearCart, deleteCart, getCart } from "../../redux/cart/cartSlice";
import { useSelector } from "react-redux";
import BackToMenu from "../../ui/BackToMenu";
import {useDispatch} from 'react-redux';
import CartQuantiesUpdate from "../../ui/CartQuantiesUpdate";
import {useNavigate} from 'react-router-dom'

export default function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteCart(id))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div className="w-[80%] mx-auto">
      <div className="mt-8 back-to-menu-container ps-6 ">
        <BackToMenu />
      </div>
      <div className="px-6 mt-4 cart-list-container">
        {cart.length !== 0 ? (
          <div className="cart-list">
            <h2 className="mb-4 text-2xl font-semibold">Your cart, jonas</h2>
            <ul className="cart-list">
              {cart?.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-4 border-b-2 gap-x-6"
                >
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span>
                    <span className="me-4">${item.totalPrice.toFixed(2)}</span>
                    <CartQuantiesUpdate id={item.id}/>

                    <button onClick={() => handleDelete(item.id)} className="px-4 py-2 tracking-widest bg-yellow-500 rounded-full ms-6">
                      DELETE
                    </button>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 btn-container *:me-6">
              <button onClick={() => navigate('/order/new')} className="px-4 py-2 font-semibold tracking-widest bg-yellow-500 rounded-full ">
                ORDER PIZZAS
              </button>
              <button onClick={handleClearCart} className="px-4 py-2 font-semibold tracking-widest bg-yellow-500 rounded-full ">
                CLEAR CART
              </button>
            </div>
          </div>
        ) : (
          <h2>Your cart is still empty. Start adding some pizzas :)</h2>
        )}
      </div>
    </div>
  );
}

/* eslint-enable react/prop-types */

