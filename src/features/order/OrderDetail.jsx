/* eslint-disable no-unused-vars */

import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/helper";

export async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default function OrderDetail() {
  const order = useLoaderData();
  const {
    customer,
    status,
    priority,
    cart,
    id,
    orderPrice,
    priorityPrice,
    estimatedDelivery,
  } = order;
 const {formattedDate, formattedTime} = formatDate(estimatedDelivery)

  return (
    <section className="flex justify-center pt-10 order-detail-section">
      <div className="order-detail-container w-[70%] mx-auto">
        <div className="flex items-center justify-between mb-6 header">
          <h2 className="text-2xl font-semibold">Order #{id} status</h2>
          <div className="status *:me-4">
            {priority && (
              <span className="px-3 py-1 bg-red-500 rounded-full text-white/90">
                PRIORITY
              </span>
            )}

            <span className="px-3 py-1 bg-green-500 rounded-full text-white/90">
              PREPARING ORDER
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-6 mb-5 bg-stone-200 time-left">
          <h2>Only {formattedTime} minutes left 🥳</h2>
          <span className="text-stone-600">(Estimated delivery: {formattedDate})</span>
        </div>

        <ul className=" cart-list-detail">
          {order.cart.map((item) => (
            <li
              key={item.pizzaId}
              className="flex flex-col py-4 border-t-2 border-b-2"
            >
              <div className="flex items-center justify-between">
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span>${item.unitPrice.toFixed(2)}</span>
              </div>
              <span className="text-stone-400">
                {item.ingredients?.join(",")}
              </span>
            </li>
          ))}
        </ul>

        <div className="p-6 bg-stone-200 price-container">
          <p>Price pizza: ${orderPrice}</p>
          {priority && <p>Price priority: ${priorityPrice}</p> }
          <p className="font-semibold">
            To pay on delivery: ${orderPrice + priorityPrice}
          </p>
        </div>
      </div>
    </section>
  );
}
